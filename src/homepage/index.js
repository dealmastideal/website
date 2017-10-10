
let template = require('./template');
module.exports = function(req, res) {
    res.marko(template, {});
}