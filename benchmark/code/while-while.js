'use strict';

module.exports = function union() {
  var len = arguments.length;
  var res = [], i = 0;

  while (len--) {
    var arg = arrayify(arguments[i++]);
    var alen = arg.length, j = 0;

    while (alen--) {
      var ele = arg[j++];

      if (res.indexOf(ele) === -1) {
        res.push(ele);
      }
    }
  }
  return res;
};

function arrayify(val) {
  return Array.isArray(val) ? val : [val];
}
