/*!
 * arr-union <https://github.com/jonschlinkert/arr-union>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var unique = require('array-unique');

module.exports = function union(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('arr-union expects an array as the first argument.');
  }
  return unique([].concat.apply([], arguments));
};
