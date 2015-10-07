'use strict';

var path = require('path');

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../..'),

  // Server port
  port: process.env.OPENSHIFT_NODEJS_PORT || 8080,

  // Server IP
  ip: process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1",

};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports =  all;
