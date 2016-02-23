/*!
 * arr-union <https://github.com/jonschlinkert/arr-union>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps:mocha */
var path = require('path');
var argv = require('minimist')(process.argv.slice(2));
var should = require('should');
var union = require('./');

if (argv._.length) {
  union = require(path.resolve('benchmark/code/' + argv.code + '.js'));
}

describe('union', function() {
  it('should add elements to the original array:', function() {
    var arr = ['a'];
    union(arr, ['b', 'c'], ['a'], ['b', 'c'], ['d', 'e', 'f']).sort()
    arr.should.eql(['a', 'b', 'c', 'd', 'e', 'f'].sort());
  });

  it('should union all elements in the given arrays:', function() {
    union(['a'], ['b', 'c'], ['d', 'e', 'f']).sort().should.eql(['a', 'b', 'c', 'd', 'e', 'f'].sort());
  });

  it('should ignore falsey values', function() {
    union(['a'], undefined, ['d', 'e', 'f']).sort().should.eql(['a', 'd', 'e', 'f'].sort());
  });

  it('should arrayify non-array values', function() {
    union(['a'], 'cde', ['d', 'e', 'f']).sort().should.eql(['a', 'cde', 'd', 'e', 'f'].sort());
  });

  it('should uniquify elements from additional arrays:', function() {
    var arr = ['a', 'b', 'c'];
    var res = union(arr, ['b', 'c'], ['a'], ['b', 'c'], ['d', 'e', 'f']).sort()
    res.should.eql(['a', 'b', 'c', 'd', 'e', 'f'].sort());
  });
});

