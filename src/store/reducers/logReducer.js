import { FETCH_LOGS, DEFAULT } from '../types';

const actionTypes = {
  [FETCH_LOGS]: (state, logs) => ({
    ...state,
    ...logs,
  }),
  [DEFAULT]: state => state,
};

export const Logs = (state = {}, action) => {
  if (!actionTypes[action.type]) return actionTypes[DEFAULT](state);
  return actionTypes[action.type](state, action.payload);
};
