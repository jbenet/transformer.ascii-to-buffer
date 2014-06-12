var Conversion = require('transformer-conversion');
var tAscii = require('transformer.ascii');
var tBuffer = require('transformer.buffer');
// require any other modules you may need here.

module.exports = Conversion(tAscii, tBuffer, convert);

function convert(ascii) {
  return new Buffer(ascii, 'ascii');
}
