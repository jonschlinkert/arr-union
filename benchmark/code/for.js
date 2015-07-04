'use strict';

var unique = require('array-unique');

module.exports = function union(init) {
  var arr = [].slice.call(arguments, 1);
  var len = arr.length;

  for (var i = 0; i < len; i++) {
    init = init.concat(arr[i]);
  }

  init = unique(init);
  return init;
};
