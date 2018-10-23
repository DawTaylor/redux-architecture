import { auth, googleProvider } from '../../firebase';

import { AUTH_USER, AUTH_LOGOUT } from '../types';

export const authWithGoogle = () => async dispatch => {
  try {
    const user = await auth.signInWithPopup(googleProvider);
    dispatch({ type: AUTH_USER, payload: user });
  } catch (err) {
    console.error('auth error', { err });
  }
};

export const authLogout = () => async dispatch => {
  try {
    await auth.signOut();
    dispatch({ type: AUTH_LOGOUT });
  } catch (err) {
    console.error('auth error', { err });
  }
};

export const authCheck = () => async dispatch => {
  auth.onAuthStateChanged(user => {
    if (user) {
      dispatch({ type: AUTH_USER, payload: user });
    } else {
      console.log('no user logged in');
    }
  });
};
