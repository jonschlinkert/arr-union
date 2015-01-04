/*!
 * arr-union <https://github.com/jonschlinkert/arr-union>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function union(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('arr-union expects an array as the first argument.');
  }
  var len = arguments.length;
  var res = [];

  while (len--) {
    var arg = arguments[len];

    for (var i = 0; i < arg.length; i++) {
      var ele = arg[i];

      if (res.indexOf(ele) === -1) {
        res.push(ele);
      }
    }
  }
  return res;
};
