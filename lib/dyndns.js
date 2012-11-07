"use strict";

var
  request = require('request');

module.exports = {
  my_ip: function(cb) {
    request('http://ipadresse24.de', function(err, response, body) {
      err && cb(err, null);
      console.log(body);
      cb(null, body);
    });
  }
};

