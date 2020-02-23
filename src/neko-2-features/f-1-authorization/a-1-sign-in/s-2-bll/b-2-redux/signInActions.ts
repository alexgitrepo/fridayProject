import {ISignInState} from "./signInInitialState";

export const SIGN_IN_LOADING = 'SIGN_IN/LOADING';
export const SIGN_IN_ERROR = 'SIGN_IN/ERROR';
export const SIGN_IN_SUCCESS = 'SIGN_IN/SUCCESS';

export const SIGN_IN = 'SIGN_IN/SOME'; // blank

interface ISignInSome { // blank
    type: typeof SIGN_IN
    email: string,
    password: string,
    rememberMe: boolean

}

export type ISignInActions = ISignInSome;

export const signInSome = (email: string, password: string, rememberMe: boolean) => ({ // blank
    type: SIGN_IN,
    email, password, rememberMe
});

