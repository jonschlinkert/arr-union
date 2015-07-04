'use strict';

var unique = require('array-unique');

module.exports = function union(init) {
  var len = arguments.length, i = 0;

  while (++i < len) {
    var arg = arguments[i];
    var alen = arg.length;

    while (alen--) {
      init.push(arg[alen]);
    }
  }
  return unique(init);
};
