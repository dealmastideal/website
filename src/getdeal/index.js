
let template = require('./template');
let ClicksSchema = require('../../db/Clicks');

const ru = 'https://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=2&toolid=100034&campid=5338197600&customid=&vectorid=229466&item=';

module.exports = function(req, res) {
    res.set('Content-Type', 'text/html');
    // let redirectUrl = req.query.rurl || 'www.dealmastideal.com';
    let price = req.query.price || 0;
    // let itemId = req.query.itemid || 0;
    let userid = req.query.userid || 'none';
    let store = req.query.store || 'ebay';   
    // res.redirect(redirectUrl);
    let itemId = req.params.itemid || 0;
    res.redirect(ru + itemId);

    // template.render({ru: ru + itemId}, res);

    //Save to DB
    if(!req.isBot) {
        ClicksSchema().create({id: Date.now(), itemId: itemId, price: price, store: store, userId: userid}, (err, doc) => {
            if(err) {
                console.error('Cannot insert record to DB', err);
            }
        });
    }
    
}