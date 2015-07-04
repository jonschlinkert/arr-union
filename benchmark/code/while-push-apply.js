'use strict';

var unique = require('array-unique');

module.exports = function union(init) {
  var len = arguments.length, i = 0;

  while (++i < len) {
    init.push.apply(init, arguments[i]);
  }
  return unique(init);
};
