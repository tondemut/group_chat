var express = require('express');
// App Setup

var app = express();
var server = app.listen(4000, function(){
    console.log('listening to requests');
});

// Static files
app.use(express.static('public'));