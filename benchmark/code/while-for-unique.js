'use strict';

var unique = require('array-unique');

module.exports = function union() {
  var len = arguments.length;
  var res = [];

  while (len--) {
    var arg = arguments[len];

    for (var j = 0; j < arg.length; j++) {
      res.push(arg[j]);
    }
  }
  return unique(res);
};
