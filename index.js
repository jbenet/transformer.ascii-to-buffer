var transformer = require('dat-transformer');
var tAscii = transformer('ascii');
var tBuffer = transformer('buffer');
// require any other modules you may need here.

module.exports = transformer.Conversion(tAscii, tBuffer, convert);

function convert(ascii) {
  return new Buffer(ascii, 'ascii');
}
