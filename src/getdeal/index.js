
let template = require('./template');
let ClicksSchema = require('../../db/Clicks');

const redirectUrls = {
    'ebay': (itemId, title) => {
            return 'https://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=100034&campid=5338197600&customid=&vectorid=229466&item=' + itemId;
    },
    'walmart': (itemId, title) => {
            let walmartUrl = encodeURIComponent(encodeURIComponent(`https://www.walmart.com/ip/${title}/${itemId}?affp1=Jbms7IA4e4-4ts1VQW3NqgCLkDydS8ws5_78t3r6Aow&affilsrc=api`));
            return `http://linksynergy.walmart.com/fs-bin/click?id=dytoBTXu0Pk&offerid=223073.7200&type=14&catid=8&subid=0&hid=7200&tmpid=1082&RD_PARM1=${walmartUrl}`;
    },
    'amazon': (itemId, title) => {        
        return `http://www.amazon.com/${title}/dp/${itemId}?SubscriptionId=AKIAI75DNMUHMCTDRK4Q&tag=dealmastideal-20&linkCode=xm2&camp=2025`;
    }
}

module.exports = function(req, res) {
    res.set('Content-Type', 'text/html');
    // let redirectUrl = req.query.rurl || 'www.dealmastideal.com';
    let price = req.query.price || 0;
    // let itemId = req.query.itemid || 0;
    let userid = req.query.userid || 'none';
    let site = req.params.site || req.query.store || 'ebay';   
    let title = req.params.title || req.query.title || '-';   
    let itemId = req.params.itemid || 0;
    
    let ru = redirectUrls[site](itemId, title);
    // console.log('********',site, itemId, title, ru);
    res.redirect(ru);

    //Save to DB
    if(!req.isBot) {
        ClicksSchema().create({id: Date.now(), itemId: itemId, price: price, store: site, userId: userid}, (err, doc) => {
            if(err) {
                console.error('Cannot insert record to DB', err);
            }
        });
    }
    
}