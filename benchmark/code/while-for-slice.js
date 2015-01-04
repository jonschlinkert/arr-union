'use strict';

module.exports = function union() {
  var args = [].slice.call(arguments);
  var len = args.length;
  var res = [];

  while (len--) {
    var arg = args[len];

    for (var j = 0; j < arg.length; j++) {
      var ele = arg[j];

      if (res.indexOf(ele) === -1) {
        res.push(ele);
      }
    }
  }
  return res;
};
