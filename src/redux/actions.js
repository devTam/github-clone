import { SIGNED_IN, SIGN_IN, SIGN_OUT } from './types';

export const signIn = (token) => ({
  type: SIGN_IN,
  payload: token,
});

export const signedIn = (currentUser) => ({
  type: SIGNED_IN,
  payload: currentUser,
});

export const signOut = () => ({
  type: SIGN_OUT,
});
