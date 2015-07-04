'use strict';

module.exports = function union(init) {
  var len = arguments.length, i = 0;

  while (++i < len) {
    var arg = arrayify(arguments[i]);
    var alen = arg.length, j = 0;

    while (alen--) {
      var ele = arg[j++];

      if (init.indexOf(ele) === -1) {
        init.push(ele);
      }
    }
  }
  return init;
};

function arrayify(val) {
  return Array.isArray(val) ? val : [val];
}
