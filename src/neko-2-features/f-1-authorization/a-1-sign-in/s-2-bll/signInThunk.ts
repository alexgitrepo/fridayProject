import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../neko-1-main/m-2-bll/store";
import {ISignInActions} from "./b-2-redux/signInActions";
import {SignInAPI} from "../s-3-dal/SignInAPI";
import {passwordCoding} from "../../../f-2-helpers/h-1-authorization/passwordCoding";
import {INekoActions, nekoSetName} from "../../../f-4-social/s-1-neko/n-2-bll/b-2-redux/nekoActions";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const signIn =
    (email: string, password: string, rememberMe: boolean)
        : ThunkAction<Return, IAppStore, ExtraArgument, ISignInActions> =>
        async (
            dispatch: ThunkDispatch<IAppStore, ExtraArgument, ISignInActions | INekoActions>,
            getStore: IGetStore
        ) => {

        };
