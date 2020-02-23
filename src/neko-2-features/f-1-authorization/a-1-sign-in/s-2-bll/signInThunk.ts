import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../neko-1-main/m-2-bll/store";
import {SignInAllActionsType} from "./b-2-redux/signInActions";
import {SignInAPI} from "../s-3-dal/SignInAPI";
import {passwordCoding} from "../../../f-2-helpers/h-1-authorization/passwordCoding";
import {INekoActions, nekoSetName} from "../../../f-4-social/s-1-neko/n-2-bll/b-2-redux/nekoActions";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const signInThunk =
    (email: string, password: string, rememberMe: boolean)
        : ThunkAction<Return, IAppStore, ExtraArgument, SignInAllActionsType> =>
        async (
            dispatch: ThunkDispatch<IAppStore, ExtraArgument, SignInAllActionsType | INekoActions>,
            getStore: IGetStore
        ) => {
            try {
                const result = await SignInAPI({email,password,rememberMe});
                // signInSome()
                alert('Welcome')
            } catch (e) {
                alert('incorect')
            }
        };
