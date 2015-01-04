'use strict';

module.exports = function union() {
  var arr = [].concat.apply([], arguments);
  var len = arr.length;
  var res = [];

  while (len--) {
    var ele = arr[len];
    if (res.indexOf(ele) === -1) {
      res.push(ele);
    }
  }
  return res;
};
