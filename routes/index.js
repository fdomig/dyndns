"use strict";

var
  dyndns = require('../lib/dyndns'),
  timer  = require('../lib/time');

/*
 * GET home page.
 */

var
  last_ip     = null,
  last_change = new Date();

exports.index = function(req, res) {
  dyndns.my_ip(function(err, ip) {
    if (err) throw err;
    var uptime;

    if (last_ip && last_ip != ip) {
      last_change = new Date();
      last_ip = ip;
      uptime = 0;
    } else {
      uptime = timer.since(last_change);
    }

    res.render('index', {
      title: 'My IP',
      my_ip: ip,
      uptime: uptime
    });
  });
};
