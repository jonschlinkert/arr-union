/*!
 * arr-union <https://github.com/jonschlinkert/arr-union>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var union = require('./');

describe('union', function () {
  it('should throw an error if the value passed is not an array:', function () {
    (function () {
      union();
    }).should.throw('arr-union expects an array as the first argument.');
  });

  it('should union all elements in the given arrays:', function () {
    union(['a'], ['b', 'c'], ['d', 'e', 'f']).should.eql(['a', 'b', 'c', 'd', 'e', 'f']);
  });

  it('should uniquify the arrays:', function () {
    union(['a'], ['b', 'c'], ['a'], ['b', 'c'], ['d', 'e', 'f']).should.eql(['a', 'b', 'c', 'd', 'e', 'f']);
  });
});

