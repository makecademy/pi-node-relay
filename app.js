// Requires
var express = require('express');
var path = require('path');
var querystring = require("querystring");
var url = require('url');
var gpio = require('rpi-gpio');

// Create app
var app = express();
var port = 3700;

// Set views
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// Serve files
app.get('/interface', function(request, response){
  response.sendfile('views/interface.html')
});

// Send commands to PI
app.get("/send", function(request, response){
    
    // Get data
    var queryData = url.parse(request.url, true).query;
    console.log("State " + queryData.state + " received.");

    // Apply command
    if (queryData.state == 'on') {
      
      gpio.setup(7, gpio.DIR_OUT, write);
      function write() {
        gpio.write(7, true, function(err) {
          if (err) throw err;
          console.log('Written to pin');
         });
      }
    }
    if (queryData.state == 'off') {
        
      gpio.setup(7, gpio.DIR_OUT, write);
      function write() {
        gpio.write(7, false, function(err) {
          if (err) throw err;
          console.log('Written to pin');
         });
      }
    } 
    
    // Answer
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end();
});

// Start server
app.listen(port);
console.log("Listening on port " + port);