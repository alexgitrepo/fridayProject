export interface ISignInState {
    email: string,
    password: string,
    rememberMe: boolean,
    auth: boolean,
    error: null | string
    // isFetching: boolean
}

export const signInInitialState: ISignInState = {
    email: '',
    password: '',
    rememberMe: false,
    auth: false,
    error: null
    // isFetching: false
};
//
// email: 'test@email.nya',
// password: 'ftc{.}mxy~gub%jzc',