'use strict';

var unique = require('array-unique');

module.exports = function union() {
  var res = [];
  res = res.concat.apply(res, arguments);
  return unique(res);
};
