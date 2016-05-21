import Ember from 'ember';

const {Helper} = Ember;

export function formatTimeago(params/*, hash*/) {
  if (!params || !params.length) {
    return;
  }

  let [timeago, isDueDate] = params;

  return isDueDate ? moment(timeago).endOf("day").fromNow() : moment(timeago).fromNow();
}

export default Helper.helper(formatTimeago);
