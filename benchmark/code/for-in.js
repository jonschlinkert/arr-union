'use strict';

module.exports = function unique(arr) {
  var args = [].slice.call(arguments);
  var len = args.length;
  var cache = {};
  var res = [];


  for (var i = 0; i < len; i++) {
    var arr = args[i];
    var alen = arr.length;
    while (alen--) {
      var ele = arr[alen];
      if (!(ele in cache)) {
        cache[ele] = true;
        res.push(ele);
      }
    }
  }

  return res;
};
