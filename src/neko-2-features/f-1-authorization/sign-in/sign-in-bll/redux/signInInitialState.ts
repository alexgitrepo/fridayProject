export interface ISignInState {
    email: string,
    password: string,
    rememberMe: boolean,
    auth: boolean,
    // isFetching: boolean
}

export const signInInitialState: ISignInState = {
    email: '',
    password: '',
    rememberMe: false,
    auth: false,
    // isFetching: false
};
//
// email: 'test@email.nya',
// password: 'ftc{.}mxy~gub%jzc',