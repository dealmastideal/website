require('marko/node-require'); // Allow Node.js to require and load `.marko` files

const express = require('express');
const markoExpress = require('marko/express');
const helmet = require('helmet');

let homepage = require('./src/homepage');

let app = express();

app.use(helmet());
app.use(markoExpress()); 

app.use('/static', express.static('public'))

app.get('/', homepage);

app.listen(8080, () => {
    console.log('App Started');
});