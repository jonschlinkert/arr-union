'use strict';

var unique = require('array-unique');

module.exports = function union() {
  var len = arguments.length;
  var res = [];

  for (var i = 0; i < len; i++) {
    res = res.concat(arguments[i]);
  }

  return unique(res);
};
