function booleanJSONEval(expression, variables) {
  if ('not' in expression) {
    return !booleanJSONEval(expression.not, variables) }
  else if ('and' in expression) {
    return (
      booleanJSONEval(expression.and[0], variables) &&
      booleanJSONEval(expression.and[1], variables)) }
  else if ('or' in expression) {
    return (
      booleanJSONEval(expression.or[0], variables) ||
      booleanJSONEval(expression.or[1], variables)) }
  else if ('variable' in expression) {
    var name = expression.variable
    if (name in variables) {
      return !!variables[expression.variable] }
    else {
      throw new Error('Undefined variable: ' + name) } }
  else {
    throw new Error('Invalid boolean JSON') } }

module.exports = booleanJSONEval
