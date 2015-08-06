```javascript
var evaluate = require('boolean-json-eval')
var assert = require('assert')

assert(
  evaluate(
    { variable: 'x' },
	{ x: true }))

assert(
  evaluate(
    { or: [
	    { variable: 'a' },
		{ not: {
		    variable: 'b' } } ] },
	{ a: 0,
	  b: '' }))

assert.throws(
  function() {
    evaluate(
      { variable: 'x' },
  	{ }) })
```
