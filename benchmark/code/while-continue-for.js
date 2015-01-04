'use strict';

module.exports = function union() {
  var len = arguments.length;
  var res = [];

  while (len--) {
    var arg = arguments[len];

    for (var j = 0; j < arg.length; j++) {
      var ele = arg[j];

      if (res.indexOf(ele) >= 0) {
        continue;
      }

      res.push(ele);
    }
  }
  return res;
};
