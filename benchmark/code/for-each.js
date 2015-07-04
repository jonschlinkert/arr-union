'use strict';

var unique = require('array-unique');

module.exports = function diff(init) {
  var args = [].slice.call(arguments, 1);

  args.forEach(function (arr) {
    arr.forEach(function(ele) {
      init.push(ele);
    });
  });

  return unique(init);
};
