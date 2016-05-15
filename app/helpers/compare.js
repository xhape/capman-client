import Ember from 'ember';

const {Helper} = Ember;

function compare(params) {
  if (params.length < 2) {
    throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
  }

  let [lvalue, operator, rvalue] = params;

  if (rvalue === undefined) {
    rvalue = operator;
    operator = "===";
  }

  var operators = {
    '==': function (l, r) { return l === r; },
    '===': function (l, r) { return l === r; },
    '!=': function (l, r) { return l !== r; },
    '!==': function (l, r) { return l !== r; },
    '<': function (l, r) { return l < r; },
    '>': function (l, r) { return l > r; },
    '<=': function (l, r) { return l <= r; },
    '>=': function (l, r) { return l >= r; },
    'typeof': function (l, r) { return typeof l === r; }
  };

  if (!operators[operator]) {
    throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);
  }

  return operators[operator](lvalue, rvalue);
}

export default Helper.helper(compare);
