var express = require('express');
var router = express.Router();

var math = require('../math');

router.get('/', function(req, res, next) {
  if (req.query.gelonum) {
    // Calculate directly in this server
    res.render('gel', {
      title: "Calculate Gel numbers",
      gelonum: req.query.gelonum,
      geloval: math.gel(req.query.gelonum)
    }); 
    // Calculate using async-aware function, in this server
    /* math.gelAsync(req.query.gelonum, (err, geloval) => {
      res.render('gel', {
        title: "Calculate Gel numbers",
        gelonum: req.query.gelonum,
        geloval: geloval
      });
    }); */
    // Pass request off to back end server
    /* var httpreq = require('http').request({
      host: "localhost",
      port: process.env.SERVERPORT,
      path: "/gel/"+Math.floor(req.query.gelonum),
      method: 'GET'
    },
    httpresp => {
      httpresp.on('data', chunk => {
        var data = JSON.parse(chunk);
        res.render('gel', {
          title: "Calculate Gel numbers",
          gelonum: req.query.gelonum,
          geloval: data.result
        });
      });
      httpresp.on('error', err => { next(err); });
    });
    httpreq.on('error', err => { next(err); });
    httpreq.end(); */
  } else {
    res.render('gel', {
      title: "Calculate Gel numbers",
      geloval: undefined
    });
  }
});

module.exports = router;
