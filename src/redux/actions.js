import {SIGN_IN, SIGN_OUT } from "./types";

export const signIn = token => ({
    type: SIGN_IN,
    payload: token
})


export const signOut = () => ({
    type: SIGN_OUT
})