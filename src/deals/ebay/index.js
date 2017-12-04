let request = require('request');

const ebayDealsURL = 'https://epndeals.api.ebay.com/epndeals/v1?marketplace=us&campaignid=5338197600&toolid=100034&rotationId=711-53200-19255-0&type=DAILY%2CWEEKLY%2CCORE&format=json&count=50&offset=';

let ebayDealsCache = {items:[], site: 'ebay'}, timestamp = Date.now();
module.exports = function(req, res, callback) {
    let page = req.query.page || '1';

    //Return Cached content for Page=1, rest other pages (2,3..) call service
    if(page === '1' && Date.now() - timestamp < 60*60*1000 && ebayDealsCache.items.length > 0) {
        console.log('ebay - Returning Cached Content for first page');
        return callback(null, ebayDealsCache);
    }

    request(ebayDealsURL+page, (err, response, body) => {
        if(err){
            console.error('Unable to fetch deals for ebay.com, returning cached content', err);
            return callback(err, ebayDealsCache);
        }
        let data = JSON.parse(body);
        // console.log(typeof body,  body.items);
        let ebayDeals = {};
        ebayDeals.items = data.items.map(function(element) {
                            return {
                                id: element.itemId,
                                title: element.title,
                                encodedtitle: element.title.replace(/ /gi, '-').replace(/\//gi, '-'),
                                url: element.itemUrl,
                                encodedurl: encodeURIComponent(element.itemUrl),
                                imageUrl: element.imageUrl,
                                price: element.price,
                                originalPrice: element.originPrice,
                                currency: element.currency,
                                store: 'ebay'
                            }
                        });

        //Cache Page=1 for faster response times
        if(page === '1') {
            ebayDealsCache.items = ebayDeals.items;
            timestamp = Date.now();
        }
        ebayDeals.site = 'ebay';
        callback(null, ebayDeals);
    });
};