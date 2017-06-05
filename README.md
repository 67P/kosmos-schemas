This repository/module contains JSON Schema definitions as well as examples for
[Kosmos](https://kosmos.org) data formats.

## Usage

You can import these schemas to validate data in JavaScript programs. For
example using npm and the [tv4](https://www.npmjs.com/package/tv4) JSON Schema
validator:

```js
let tv4 = require('tv4');
let schemas = require('kosmos-schemas');

let result = tv4.validate(contributor, schemas['contributor']);

if (result) {
  console.log('Your data is valid');
} else {
  console.log('Your data is not valid:');
  console.log(tv4.error);
}
```

## TODO

* Add script for publishing both human- and machine-readable schemas to
  https://schemas.kosmos.org
