//use module exports to expose middleware

var middleware = {
    requireAuthentication: function(req, res, next){
        console.log('private route hit');
        next();
    },
    logger: function(req, res, next){
        console.log('Request: '+ new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
        next();
    }
}


//this is how you assign the object to module exports.
module.exports = middleware;