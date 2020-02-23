//CONSTANTS
export const SIGN_IN = 'SIGN_IN/SOME';
export const SIGN_IN_EMAIL = 'SIGN_IN_EMAIL';
export const SIGN_IN_PASSWORD = 'SIGN_IN_PASSWORD';
export const SIGN_IN_REMEMBER_ME = 'SIGN_IN_REMEMBER_ME';
export const SIGN_IN_LOADING = 'SIGN_IN/LOADING';
export const SIGN_IN_ERROR = 'SIGN_IN/ERROR';
export const SIGN_IN_SUCCESS = 'SIGN_IN/SUCCESS';

//DESCRIPTION TYPES || INTERFACES
export type SignInEmailChangeType = {
    type: typeof SIGN_IN_EMAIL
    email: string
}
export type SignInPasswordChangeType = {
    type: typeof SIGN_IN_PASSWORD
    password: string
}
export type SignInRememberMeChangeType = {
    type: typeof SIGN_IN_REMEMBER_ME
    rememberMe: boolean

}
export type SignInRequestType = {
    type: typeof SIGN_IN
}
export type SignInAllActionsType = SignInEmailChangeType
    | SignInPasswordChangeType
    | SignInRememberMeChangeType
    | SignInRequestType;

// ACTION CREATORS
export const signInEmailChange = (email: string): SignInEmailChangeType => ({type: SIGN_IN_EMAIL, email});
export const signInPasswordChange = (password: string): SignInPasswordChangeType => ({
    type: SIGN_IN_PASSWORD,
    password
});
export const signInRememberMeChange = (rememberMe: boolean) : SignInRememberMeChangeType => ({type:SIGN_IN_REMEMBER_ME,
    rememberMe})
export const signInSome = (): SignInRequestType => ({type: SIGN_IN});
