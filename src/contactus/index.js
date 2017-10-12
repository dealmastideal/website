
let template = require('./template');
module.exports = function(req, res) {
    res.set('Content-Type', 'text/html');
    res.marko(template, {});
}