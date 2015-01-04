'use strict';

var unique = require('array-unique');

module.exports = function union() {
  var len = arguments.length;
  var res = [];

  while (len--) {
    var arg = arguments[len];
    var alen = arg.length;

    while (alen--) {
      res.push(arg[alen]);
    }
  }

  return unique(res);
};
