let request = require('request');

const ebayDealsURL = 'https://epndeals.api.ebay.com/epndeals/v1?marketplace=us&campaignid=5338197600&toolid=100034&rotationId=711-53200-19255-0&type=DAILY%2CWEEKLY%2CCORE&format=json';

let ebayDealsCache = {items:[]};
module.exports = function(req, res, callback) {
    request(ebayDealsURL, (err, response, body) => {
        if(err){
            console.error('Unable to fetch deals for ebay.com, returning cached content', err);
            return callback(err, ebayDealsCache);
        }
        let data = JSON.parse(body);
        // console.log(typeof body,  body.items);
        ebayDealsCache.items = data.items.map(function(element) {
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
        callback(null, ebayDealsCache);
    });
};