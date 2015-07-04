'use strict';

var fs = require('fs');
var path = require('path');
var bold = require('ansi-bold');

/**
 * Sanity check. run to ensure that all fns return a correct
 * result.
 */

fs.readdirSync(__dirname + '/code').forEach(function (fp) {
  var fn = require(path.resolve(__dirname, 'code', fp));
  var name = path.basename(fp, path.extname(fp));

  if (/./.test(name)) {
    fs.readdirSync(__dirname + '/fixtures').forEach(function (fixture) {
      fixture = path.resolve(__dirname, 'fixtures', fixture);
      if (/\.js$/.test(fixture)) {
        console.log(bold(name) + ':', fn.apply(null, require(fixture)));
      }
    });
  }
});
