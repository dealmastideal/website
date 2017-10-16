
let template = require('./template');
let ajax = require('./ajax');

let sites = {
    'ebay': require('./ebay')
};

module.exports = function(req, res) {
    res.set('Content-Type', 'text/html');
    let site = req.params.site || 'ebay';
    let pagination = req.query.page;
    if(site) {
        sites[site](req, res, (err, data) => {
            if(pagination) {
                ajax.render(data, res);
            } else {
                template.render(data, res);
            }       
        });
    } else {
        template.render({}, res);
    }    
}