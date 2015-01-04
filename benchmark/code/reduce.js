'use strict';

var unique = require('array-unique');

module.exports = function union(a, b) {
  var res = [].slice.call(arguments)
    .reduce(function (acc, arr) {
      return acc.concat(arr);
    }, []);

  return unique(res);
};
