let template = require('./template');
const ebayAPI = require('../../services/ebay');

module.exports = function(req, res) {
    res.set('Content-Type', 'text/html');
    let page = req.query.page || 1;
    let query = req.query.q;

    if(!query) {
        return template.render({ error: 'Search keyword is empty, Please enter query string.'}, res);
    }

    ebayAPI.search(query, page, (err, items) => {
        if(err) {
            return template.render({ error: 'Oops, something went wrong. Please try agian.'}, res);
        }
        template.render(items, res);
    });
}