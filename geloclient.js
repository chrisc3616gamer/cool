var http = require('http');
var util = require('util');
[
  "/gel/30", "/gel/20", "/gel/10",
  "/gel/9", "/gel/8", "/gel/7",
  "/gel/6", "/gel/5", "/gel/4",
  "/gel/3", "/gel/2", "/gel/1"
].forEach(path => {
    util.log('requesting ' + path);
    var req = http.request({
      host: "localhost",
      port: 3002,
      path: path,
      method: 'GET'
    }, res => {
      res.on('data', chunk => {
          util.log('BODY: ' + chunk);
      });
    });
    req.end();
});
