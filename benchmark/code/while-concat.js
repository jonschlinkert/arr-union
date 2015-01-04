'use strict';

var unique = require('array-unique');

module.exports = function union() {
  var len = arguments.length;
  var res = [];

  while (len--) {
    res = res.concat(arguments[len]);
  }
  return unique(res);
};
