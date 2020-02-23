export interface ISignInState {
    email: string,
    password: string,
    rememberMe: boolean
}

export const signInInitialState: ISignInState = {
    email: '',
    password: '',
    rememberMe: false
};
//
// email: 'test@email.nya',
// password: 'ftc{.}mxy~gub%jzc',