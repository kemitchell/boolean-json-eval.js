const assert = require('assert')
const evaluate = require('./')

const tests = [
  {
    name: 'true',
    expression: 'a',
    variables: { a: true },
    result: true
  },
  {
    name: 'false',
    expression: 'a',
    variables: { a: false },
    result: false
  },
  {
    name: 'NOT false',
    expression: {not: 'a'},
    variables: { a: false },
    result: true
  },
  {
    name: 'true AND true',
    expression: { and: ['a', 'b'] },
    variables: { a: true, b: true },
    result: true
  },
  {
    name: 'true AND false',
    expression: { and: ['a', 'b'] },
    variables: { a: true, b: false },
    result: false
  },
  {
    name: 'false AND true',
    expression: { and: ['a', 'b'] },
    variables: { a: false, b: true },
    result: false
  },
  {
    name: 'false OR false',
    expression: { or: ['a', 'b'] },
    variables: { a: false, b: false },
    result: false
  },
  {
    name: 'false OR true',
    expression: { or: ['a', 'b'] },
    variables: { a: false, b: true },
    result: true
  },
  {
    name: 'true OR false',
    expression: { or: ['a', 'b'] },
    variables: { a: true, b: false },
    result: true
  },
  {
    name: '(true OR true) AND (true AND NOT true)',
    expression: {
      and: [
        { or: ['a', 'b'] },
        { and: [ 'a', { not: 'a' } ] }
      ]
    },
    variables: { a: true },
    result: false
  }
]

for (const test of tests) {
  assert(evaluate(test.expression, test.variables) === test.result, test.name)
}
