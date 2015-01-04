'use strict';

var unique = require('array-unique');

module.exports = function union() {
  var arr = [].slice.call(arguments);
  var len = arr.length;
  var res = [];

  for (var i = 0; i < len; i++) {
    res = res.concat(arr[i]);
  }

  return unique(res);
};
