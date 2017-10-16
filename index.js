require('marko/node-require'); // Allow Node.js to require and load `.marko` files

const express = require('express');
const markoExpress = require('marko/express');
const helmet = require('helmet');
const https = require('https');
const fs = require('fs');

//Import Pages
let homepage = require('./src/homepage');
let deals = require('./src/deals');
let coupons = require('./src/coupons');
let contactus = require('./src/contactus');
let getdeal = require('./src/getdeal');

let errorPage = require('./src/error/template');

const options = {
    key: fs.readFileSync('certs/private_rsa.key'),
    cert: fs.readFileSync('certs/certificate.crt')
};

let app = express();
// app.enable('trust proxy');

app.use(helmet());
app.use(markoExpress()); 

app.use((req, res, next) => {
    console.log(`${new Date().toLocaleTimeString('en-US')}:: IP:${req.ip} Path:${req.originalUrl}`);

    let userAgent = req.headers['user-agent'] || "";
	//	Convert all character cases to lower to avoid linux environment mismatching
	userAgent.toLowerCase();
	
	//	Define all known bot list under regex
	var BOT_REGEX = /bot|crawler|baiduspider|80legs|mediapartners-google|adsbot-google|008|abachobot|accoona-ai-agent|addsugarspiderbot|anyapexbot|arachmo|b-l-i-t-z-b-o-t|baiduspider|becomebot|beslistbot|billybobbot|bimbot|bingbot|blitzbot|boitho.com-dc|boitho.com-robot|btbot|catchbot|cerberian drtrs|charlotte|converacrawler|cosmos|covario ids|dataparksearch|diamondbot|discobot|dotbot|emeraldshield.com |webbot|esperanzabot|exabot|fast enterprise crawler|fast-webcrawler|fdse robot|findlinks|furlbot|fyberspider|g2crawler|gaisbot|galaxybot|geniebot|gigabot|girafabot|googlebot|googlebot-image|gurujibot|happyfunbot|hl_ftien_spider|holmes|htdig|iaskspider|ia_archiver|iccrawler|ichiro|igdespyder|irlbot|issuecrawler|jaxified bot|jyxobot|koepabot|l.webis|lapozzbot|larbin|ldspider|lexxebot|linguee bot|linkwalker|lmspider|lwp-trivial|mabontland|magpie-crawler|mediapartners-google|mj12bot|mnogosearch|mogimogi|mojeekbot|moreoverbot|morning paper|msnbot|msrbot|mvaclient|mxbot|netresearchserver|netseer crawler|newsgator|ng-search|nicebot|noxtrumbot|nusearch spider|nutchcvs|nymesis|obot|oegp|omgilibot|omniexplorer_bot|oozbot|orbiter|pagebiteshyperbot|peew|polybot|pompos|postpost|psbot|pycurl|pingdom.com_bot_version|qseero|radian6|rampybot|rufusbot|sandcrawler|sbider|scoutjet|scrubby|searchsight|seekbot|semanticdiscovery|sensis web crawler|seochat::bot|seznambot|shim-crawler|shopwiki|shoula robot|silk|sitebot|snappy|sogou spider|sosospider|speedy spider|sqworm|stackrambler|suggybot|surveybot|synoobot|teoma|terrawizbot|thesubot|thumbnail.cz robot|tineye|truwogps|turnitinbot|tweetedtimes bot|twengabot|updated|urlfilebot|vagabondo|voilabot|vortex|voyager|vyu2|webcollage|websquash.com|wf84|wofindeich robot|womlpefactory|xaldon_webspider|yacy|yahoo! slurp|yahoo! slurp china|yahooseeker|yahooseeker-testing|yandexbot|yandeximages|yasaklibot|yeti|yodaobot|yooglifetchagent|youdaobot|zao|zealbot|zspider|zyborg/i;
	
	//	if bot detect?  return true elase false
	if(BOT_REGEX.test(userAgent || false)) {
        console.log('BOT DETECTED', userAgent);
    }
    next();
});

app.use('/static', express.static('public'))

app.use((req, res, next) => {
    if(!req.secure) {
        res.redirect(302, `https://www.dealmastideal.com${req.originalUrl}`);        
    }
    next();
});

//Mount routes & pages
app.get('/topdeals/:site', deals);
app.get('/topdeals', deals);
app.get('/getdeal', getdeal);
app.get('/coupons', coupons);
app.get('/contactus', contactus);
app.get('*', deals);
app.get((err, req, res, next) => {
    errorPage.render({}, res);
});

app.listen(8080, () => {
    console.log('App Started on 8080');
});

https.createServer(options, app).listen(8443, () => {
    console.log('App Started on 8443');
});