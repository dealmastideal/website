
const {OperationHelper} = require('apac');
const fs = require('fs');

const opHelper = new OperationHelper({
    awsId:     'AKIAI75DNMUHMCTDRK4Q',
    awsSecret: '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',
    assocId:   'dealmastideal-20'
});
const homePageUrl = 'http://www.amazon.com/?SubscriptionId=AKIAI75DNMUHMCTDRK4Q&tag=dealmastideal-20&linkCode=xm2&camp=2025';

let dealsCache = {items:[], site: 'amazon', home: homePageUrl}, timestamp = Date.now();
let amznDealIds = loadIds().items;
let batchSize = 10;
module.exports = function(req, res, callback) {
    let page = req.query.page || '1';
    let dealsToReturn = {items:[], site: 'amazon'};
    let isCacheRefresh = false;

    // Return Cached content for Page=1, rest other pages (2,3..) call service
    if(Date.now() - timestamp > 24*60*60*1000 ) {
        console.log('Amazon - Clearing Cache content after 24 hrs');
        
        dealsToReturn.items = copy(dealsCache.items, (page-1)*batchSize, (page*batchSize));
        dealsToReturn.home = homePageUrl;
        callback(null, dealsToReturn);

        //Clear cache and re-fetch
        dealsCache.items = [];
        timestamp = Date.now();
        amznDealIds = loadIds().items;
        isCacheRefresh = true;
    }
    
    if(dealsCache.items.length >= page*10) {
        console.log('Amazon - Returning Cached Content for first page');
        dealsToReturn.items = copy(dealsCache.items, (page-1)*batchSize, (page*batchSize));
        dealsToReturn.home = homePageUrl;
        return callback(null, dealsToReturn);
    }

    let amznIds = [];
    if(isCacheRefresh) {
        amznIds = copy(amznDealIds, 0, batchSize);        
    } else {
        amznIds = copy(amznDealIds, (page-1)*batchSize, (page*batchSize));    
    }

    opHelper.execute('ItemLookup', {
        'ItemId': `'${amznIds.join()}'`,
        'ResponseGroup': 'Medium'
      }).then((response) => {
          let data = response.result.ItemLookupResponse.Items.Item;
          let deals = {};
          deals.items = data.map(function(element) {
                            try {
                                return {
                                    id: element.ASIN,
                                    title: element.ItemAttributes.Title,
                                    encodedtitle: element.ItemAttributes.Title.replace(/ /gi, '-'),
                                    url: element.DetailPageURL,
                                    encodedurl: encodeURIComponent(element.DetailPageURL),
                                    imageUrl: element.LargeImage.URL,
                                    price: (element.OfferSummary && element.OfferSummary.LowestNewPrice.FormattedPrice) || (element.ItemAttributes.ListPrice && element.ItemAttributes.ListPrice.FormattedPrice),
                                    originalPrice: element.ItemAttributes.ListPrice && element.ItemAttributes.ListPrice.FormattedPrice ,
                                    currency: element.ItemAttributes.OfferSummary && element.ItemAttributes.OfferSummary.LowestNewPrice.CurrencyCode || '$',
                                    store: 'amazon'
                                }
                            } catch (error) {
                                console.log('Error while parsing data from Amazon',error);
                                return null;
                            }
                              
                          });
                                     
            dealsCache.items = dealsCache.items.concat(deals.items);
            deals.site = 'amazon';
            deals.home = homePageUrl;
            return callback(null, deals);
      }).catch((err) => {
          console.error("Something went wrong! ", err);
          return callback(err, {items:[], site: 'amazon'});
      });    
};

function loadIds(cb) {
    if(!cb) {
        return JSON.parse(fs.readFileSync('amazon-deals-feed.json'));
    } else {
        fs.readFile('amazon-deals-feed.json', (err, data) => {
            cb(JSON.parse(data));
        });
    }    
}

function copy(sourceArr, start, end) {
    let target = [];
    for(i=start; i< end; i++) {
        target.push(sourceArr[i]);
    }
    return target;    
}