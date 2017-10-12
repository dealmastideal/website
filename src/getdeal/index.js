
let template = require('./template');
module.exports = function(req, res) {
    res.set('Content-Type', 'text/html');
    let redirectUrl = req.query.rurl || 'www.dealmastideal.com';
    res.redirect(redirectUrl);
}