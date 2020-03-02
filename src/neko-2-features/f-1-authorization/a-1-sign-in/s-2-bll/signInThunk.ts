import {SignInAPI} from "../s-3-dal/SignInAPI";
import {ThunkAction} from "redux-thunk";
import {IAppStore} from "../../../../neko-1-main/m-2-bll/store";
import { SignInAllActionsType } from "./b-2-redux/signInActions";

export const signInThunk = (email: string, password: string, rememberMe: boolean)
    :ThunkAction<void, IAppStore, unknown, SignInAllActionsType> => (dispatch, getState) => {
     SignInAPI({email, password, rememberMe}).then(res=> {
         debugger
     })
         .catch(error=> {
             debugger
         });


    };
