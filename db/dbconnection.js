var mongoose = require('mongoose');

module.exports = function() {
    global.db = mongoose.createConnection('mongodb://localhost/test');
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      // we're connected!
    });    
    return function(req, res, next) {
        next();
    }
};
