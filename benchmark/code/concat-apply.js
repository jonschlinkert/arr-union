'use strict';

var unique = require('array-unique');

module.exports = function union(arr) {
  return unique([].concat.apply([], arguments));
};
