'use strict';

var unique = require('array-unique');

module.exports = function union() {
  var len = arguments.length;
  var res = [];

  while (len--) {
    res.push.apply(res, arguments[len]);
  }
  return unique(res);
};
