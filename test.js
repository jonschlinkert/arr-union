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

describe('union', function () {
  it('should union all elements in the given arrays:', function () {
    union(['a'], ['b', 'c'], ['d', 'e', 'f']).sort().should.eql(['a', 'b', 'c', 'd', 'e', 'f'].sort());
  });

  it('should uniquify the arrays:', function () {
    union(['a'], ['b', 'c'], ['a'], ['b', 'c'], ['d', 'e', 'f']).sort().should.eql(['a', 'b', 'c', 'd', 'e', 'f'].sort());
  });
});

