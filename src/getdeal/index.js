
let template = require('./template');
let ClicksSchema = require('../../db/Clicks');

module.exports = function(req, res) {
    res.set('Content-Type', 'text/html');
    let redirectUrl = req.query.rurl || 'www.dealmastideal.com';
    let price = req.query.price || 0;
    let itemId = req.query.itemid || 0;
    let userid = req.query.userid || 'none';
    let store = req.query.store || 'ebay';    
    res.redirect(redirectUrl);

    //Save to DB
    if(!req.isBot) {
        ClicksSchema().create({id: Date.now(), itemId: itemId, price: price, store: store, userId: userid}, (err, doc) => {
            if(err) {
                console.error('Cannot insert record to DB', err);
            }
        });
    }
    
}