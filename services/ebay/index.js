'use strict';

let request = require('request');
const qs = require('qs');

const ebayDealsURL = 'https://epndeals.api.ebay.com/epndeals/v1?marketplace=us&campaignid=5338197600&toolid=100034&rotationId=711-53200-19255-0&type=DAILY%2CWEEKLY%2CCORE&format=jsoncount=50&offset=';
const ebaySearchUrl = 'http://svcs.ebay.com/services/search/FindingService/v1?REST-PAYLOAD&';
const searchQuery = {
    'OPERATION-NAME': 'findItemsByKeywords',
    'SERVICE-VERSION': '1.0.0',
    'SECURITY-APPNAME': 'Dealmast-dealmast-PRD-45d7a0307-b694efbf',
    'RESPONSE-DATA-FORMAT': 'JSON',
    'keywords': '',
    'affiliate.trackingId': 5338197600,
    'affiliate.networkId': 9,
    'affiliate.customId': 20091985,
    'paginationInput.entriesPerPage': 50,
    'paginationInput.pageNumber': 1
};

const trendingDeals = 'http://bpe.ebay.com/trendsrv/v1/popular/items?interval=weekly&siteid=0&catid=&level=&activity=sold&query=';
const roverUrl = 'https://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=100034&campid=5338197600&customid=&vectorid=229466&item=';

let ebayDealsCache = {items:[]}, timestamp = Date.now();

function getDeals(page, callback) {
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
                                url: element.itemUrl,
                                encodedurl: encodeURIComponent(element.itemUrl),
                                imageUrl: element.imageUrl,
                                price: element.price,
                                originalPrice: element.originPrice,
                                currency: element.currency
                            }
                        });

        //Cache Page=1 for faster response times
        if(page === '1') {
            ebayDealsCache.items = ebayDeals.items;
            timestamp = Date.now();
        }                    
        callback(null, ebayDeals);
    });
}

function search(query, page, callback) {
    let params = Object.assign({},searchQuery);
    params.keywords = encodeURI(query);
    params['paginationInput.pageNumber'] = page;

    let url = ebaySearchUrl + qs.stringify(params);

    // let url = Object.keys(params).reduce((accum, key)=> {
    //     accum = accum + `&${key}=${params[key]}`;
    // }, ebaySearchUrl);
    console.log('****',url);
    request(url, (err, response, body) => {
        if(err){
            console.error('Unable to search item in ebay.com ', err);
            return callback(err, null);
        }
        let data = JSON.parse(body);
        if(data.findItemsByKeywordsResponse[0].ack[0] !== 'Success' || data.findItemsByKeywordsResponse[0].searchResult[0].item.length === 0) {
            console.error(`Error Response for query=${query}`, err);
            return callback(new Error(`Error Response for query=${query}`), null);
        }
        // console.log(typeof body,  body.items);
        let searchResults = {};
        searchResults.items = data.findItemsByKeywordsResponse[0].searchResult[0].item.map(function(element) {
                            return {
                                id: element.itemId[0],
                                title: element.title[0],
                                url: element.viewItemURL[0],
                                encodedurl: encodeURIComponent(element.viewItemURL[0]),
                                imageUrl: element.galleryURL[0],
                                price: element.sellingStatus[0].currentPrice[0]['__value__'],
                                originalPrice: element.originPrice,
                                currency: element.sellingStatus[0].currentPrice[0]['@currencyId'],
                                condition: element.condition[0].conditionDisplayName
                            }
                        });

        callback(null, searchResults);
    });
}

function searchDeals(query, page, callback) {
    let url = trendingDeals + query;
    
    request(url, (err, response, body) => {
        if(err){
            console.error('Unable to search deals in ebay.com ', err);
            return callback(err, null);
        }
        let data = JSON.parse(body);
        
        // console.log(typeof body,  body.items);
        let searchResults = {};
        searchResults.items = data.items.map(function(element) {
                            return {
                                id: element.itemId,
                                title: element.title,
                                url: roverUrl + element.itemId,
                                encodedurl: encodeURIComponent(roverUrl + element.itemId),
                                imageUrl: element.imgUrl,
                                price: element.format.buyItNowPrice.value,
                                originalPrice: element.originPrice,
                                currency: element.format.buyItNowPrice.currencyId
                            }
                        });

        callback(null, searchResults);
    });
}

module.exports = {
    getDeals: getDeals,
    search: searchDeals,
    searchDeals: searchDeals
}