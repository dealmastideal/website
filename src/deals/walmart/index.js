let request = require('request');

const dealsURL = 'http://api.walmartlabs.com/v1/trends?apiKey=q23xr8rjgudjf57rq3wgzw7w&lsPublisherId=dytoBTXu0Pk&format=json';

let walmartUrl = encodeURIComponent(encodeURIComponent(`https://www.walmart.com/?affp1=Jbms7IA4e4-4ts1VQW3NqgCLkDydS8ws5_78t3r6Aow&affilsrc=api`));
const homePageUrl = 'http://linksynergy.walmart.com/fs-bin/click?id=dytoBTXu0Pk&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=' + walmartUrl;

let dealsCache = {items:[], site: 'walmart', home: homePageUrl}, timestamp = Date.now();
module.exports = function(req, res, callback) {
    let page = req.query.page || '1';
    
    if(page && page != '1') {
        return callback(null, {items: [], site: 'walmart'});
    }

    //Return Cached content for Page=1, rest other pages (2,3..) call service
    if(Date.now() - timestamp < 60*60*1000 && dealsCache.items.length > 0) {
        console.log('Walmart - Returning Cached Content for first page');
        return callback(null, dealsCache);
    }

    request(dealsURL, (err, response, body) => {
        if(err){
            console.error('Unable to fetch deals for walmart.com, returning cached content', err);
            return callback(err, dealsCache);
        }
        let data = JSON.parse(body);
        // console.log(typeof body,  body.items);
        let deals = {};
        deals.items = data.items.map(function(element) {
                            return {
                                id: element.itemId,
                                title: element.name,
                                encodedtitle: element.name.replace(/ /gi, '-'),
                                url: element.productTrackingUrl,
                                encodedurl: encodeURIComponent(element.productTrackingUrl),
                                imageUrl: element.largeImage,
                                price: element.salePrice || element.msrp,
                                originalPrice: '$'+element.msrp,
                                currency: element.currency || '$',
                                store: 'walmart'
                            }
                        });

        //Cache Page=1 for faster response times
        if(page === '1') {
            dealsCache.items = deals.items;
            timestamp = Date.now();
        }         
        deals.site='walmart';  
        deals.home = homePageUrl;         
        callback(null, deals);
    });
};