var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000; //either use the heroku variable or hardcode 3000


var middleware = require('./middleware.js')

console.log(middleware);

//it is important to specify middleware up top - put it under get and it will not run
//this is application level middleware
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

// app.get('/', function(req, res){
//     res.send('Hello express!');
// });

// add /about //send back test "about us"
// adding middleware at route level
app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('About us!!!');
});

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);

//specify which port to listen on
app.listen(PORT, function(){
    console.log('Express server started! port: ' + PORT);
}); //port 3000 usualy not reserved