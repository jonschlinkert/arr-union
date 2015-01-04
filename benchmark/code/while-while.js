'use strict';

module.exports = function union() {
  var len = arguments.length;
  var res = [];

  while (len--) {
    var arg = arguments[len];
    var alen = arg.length;

    while (alen--) {
      var ele = arg[alen];

      if (res.indexOf(ele) === -1) {
        res.push(ele);
      }
    }
  }
  return res;
};
