'use strict';

module.exports = function union(init) {
  var len = arguments.length, i = 0;

  while (++i < len) {
    var arg = arguments[i];

    for (var j = 0; j < arg.length; j++) {
      var ele = arg[j];

      if (init.indexOf(ele) >= 0) {
        continue;
      }
      init.push(ele);
    }
  }
  return init;
};
