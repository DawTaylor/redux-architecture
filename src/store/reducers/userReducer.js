import { AUTH_USER, AUTH_LOGOUT, DEFAULT } from '../types';

const actionTypes = {
  [AUTH_USER]: (state, user) => ({
    ...state,
    ...user,
  }),
  [AUTH_LOGOUT]: () => ({}),
  [DEFAULT]: state => state,
};

export const User = (state = {}, action) => {
  if (!actionTypes[action.type]) return actionTypes[DEFAULT](state);
  return actionTypes[action.type](state, action.payload);
};
