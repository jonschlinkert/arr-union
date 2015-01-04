'use strict';

var unique = require('array-unique');

module.exports = function diff(a, b) {
  var args = [].slice.call(arguments);
  var res = [];

  args.forEach(function (arr) {
    arr.forEach(function(ele) {
      res.push(ele);
    });
  });

  return unique(res);
};
