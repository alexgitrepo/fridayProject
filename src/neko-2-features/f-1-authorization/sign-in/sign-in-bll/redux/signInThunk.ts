import {SignInAPI} from "../../sign-in-dal/SignInAPI";
import {ThunkAction} from "redux-thunk";
import {IAppStore} from "../../../../../neko-1-main/m-2-bll/store";
import { SignInAllActionsType, signInSuccess } from "./signInActions";

export const signInThunk = (email: string, password: string, rememberMe: boolean)
    :ThunkAction<void, IAppStore, unknown, SignInAllActionsType> =>
    async (dispatch) => {
        try {
            await SignInAPI({email, password, rememberMe});
            dispatch(signInSuccess())
        } catch (e) {
            let error = e.response.data.error;
            alert(error);
        }
    };
