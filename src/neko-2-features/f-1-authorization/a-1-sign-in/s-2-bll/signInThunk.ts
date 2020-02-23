import {SignInAPI} from "../s-3-dal/SignInAPI";

export const signInThunk = (email: string, password: string, rememberMe: boolean) => async (dispatch: Function, getState:Function) => {
    try {
        debugger
        const result = await SignInAPI({email, password, rememberMe});
        // signInSome()

        alert('Welcome')
    } catch (e) {
        alert("errror: "+ e)
    }
};
