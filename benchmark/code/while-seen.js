'use strict';

module.exports = function union() {
  var args = [].concat.apply([], arguments);
  var len = args.length;
  var seen = {};
  var res = [];

  while (len--) {
    var ele = args[len];
    if (!!seen[ele]) {
      continue;
    }
    res.push(seen[ele] = ele);
  }

  return res;
};
