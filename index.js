module.exports = function booleanJSONEval (expression, variables) {
  var length, index, value, operand
  if (typeof expression === 'string') {
    if (expression in variables) {
      return !!variables[expression]
    } else {
      throw new Error('Undefined variable: ' + expression)
    }
  } else if ('not' in expression) {
    return !booleanJSONEval(expression.not, variables)
  } else if ('and' in expression) {
    length = expression.and.length
    for (index = 0; index < length; index++) {
      operand = expression.and[index]
      value = booleanJSONEval(operand, variables)
      if (!value) {
        return false
      }
    }
    return true
  } else if ('or' in expression) {
    length = expression.or.length
    for (index = 0; index < length; index++) {
      operand = expression.or[index]
      value = booleanJSONEval(operand, variables)
      if (value) {
        return true
      }
    }
    return false
  } else {
    throw new Error('Invalid boolean JSON')
  }
}
