
let template = require('./template');
let ajax = require('./ajax');

let sites = {
    'ebay': require('./ebay'),
    'walmart': require('./walmart')
};
const defaultSite = 'ebay';

module.exports = function(req, res) {
    res.set('Content-Type', 'text/html');
    let site = req.params.site || defaultSite;
    let pagination = req.query.page;
    if(site) {
        let siteFunc = sites[site] || sites[defaultSite];
        siteFunc(req, res, (err, data) => {
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