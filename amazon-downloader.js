let xml2js = require('xml2js');
let request = require('request');
let url = require('url');
let fs = require('fs');

function fetchAmazonDeals() {
    let amzDeals = {items:[]}
    request.get({url: 'https://rssfeeds.s3.amazonaws.com/goldbox'}, (err, res, body)=> {
        console.log('Data Downloaded, parsing');
        xml2js.parseString(body, (parseerr, result) => {
            result.rss.channel[0].item.forEach((row) => {
                let productDetails = url.parse(row.link[0]);
                let item = productDetails.pathname.split('/');
                            
                if(row.link[0].indexOf('/dp/') > -1) {
                    (item.length === 5) ? item.unshift('') : '';

                    let itemId = item[3];
                    // let path = (item[1] && item[1].trim().length > 0) ? item[1].trim() : '-';
                    // let itemUrl = `${productDetails.protocol}//${productDetails.hostname}/${path}/${item[2]}/${item[3]}`;
                    
                    // amzDeals.items.push({
                    //     title: row.title[0],
                    //     url:   itemUrl,
                    //     itemId: itemId
                    // });

                    amzDeals.items.push(itemId);
                }
                
            });        

            fs.writeFileSync('amazon-deals-feed.json', JSON.stringify(amzDeals));
            console.log('Amazon Dump Created');
            // console.log(JSON.stringify(amzDeals));
        });
    });
}
fetchAmazonDeals();
setInterval(fetchAmazonDeals, 24*60*60*1000);
