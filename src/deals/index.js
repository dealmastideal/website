
let template = require('./template');
let sites = {
    'ebay': require('./ebay')
};

module.exports = function(req, res) {
    res.set('Content-Type', 'text/html');
    let site = req.params.site || 'ebay';
    if(site) {
        sites[site](req, res, (err, data) => {
            template.render(data, res);
        });
    } else {
        template.render({}, res);
    }    
}