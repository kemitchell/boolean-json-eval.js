```javascript
var evaluate = require('boolean-json-eval')
var assert = require('assert')

assert(evaluate('x', { x: true }))

assert(evaluate({ or: [ 'a', { not: 'b' } ] }, { a: 0, b: '' }))

assert.throws(function() { evaluate('x', { }) })
```
