# transformer.ascii-to-buffer

[Transformer](http://github.com/jbenet/transformer) conversion: ascii to buffer

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.


### Javascript

```js
var transformer = require('dat-transformer');
var tAsciiToBuffer = transformer('ascii', 'buffer');
tAsciiToBuffer('beep boop'); // new Buffer('beep boop', 'ascii')
```
