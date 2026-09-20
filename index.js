'use strict';

module.exports = function union(init) {
  if (!Array.isArray(init)) {
    throw new TypeError('arr-union expects the first argument to be an array.');
  }

  // Deduplicate values already present in the first array (documented
  // uniqueness). Previously only elements from *additional* arrays were
  // uniquified against `init`, so union(['a','a'], ['b']) => ['a','a','b'].
  // Fixes #2.
  for (var d = 0; d < init.length; d++) {
    if (init.indexOf(init[d]) !== d) {
      init.splice(d, 1);
      d--;
    }
  }

  var len = arguments.length;
  var i = 0;

  while (++i < len) {
    var arg = arguments[i];
    if (!arg) continue;

    if (!Array.isArray(arg)) {
      arg = [arg];
    }

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
