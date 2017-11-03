const Schema = require('mongoose').Schema;

let clicksSchema = Schema({dealId: String, itemId: String, price: String, store: String, userId: String});
let clickModel;
module.exports = function () {
    clickModel = clickModel || db.model('Clicks', clicksSchema);
    return clickModel;
}