'use strict';

module.exports = function unique(init) {
  var args = [].slice.call(arguments);
  var len = args.length;

  for (var i = 1; i < len; i++) {
    var arr = args[i];

    var alen = arr.length;
    while (alen--) {
      var ele = arr[alen];
      if (init.indexOf(ele) === -1) {
        init.push(ele);
      }
    }
  }

  return init;
};
