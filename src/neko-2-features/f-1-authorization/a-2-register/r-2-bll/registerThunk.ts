import {IAppStore} from "../../../../neko-1-main/m-2-bll/store";
import {addError, changeIsLoading, IAppActions, registerSome} from "./b-2-redux/registerActions";
import {RegisterAPI} from "../r-3-dal/RegisterAPI";
import {Dispatch} from "react";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const register = (email: string, password: string) => async (dispatch: Dispatch<IAppActions>, getState: () => IAppStore) => {
    try {
        dispatch(changeIsLoading(true))
        let response = await RegisterAPI.sendRegistrationRequest(email, password)
        if (response) {
            dispatch(changeIsLoading(false))
            dispatch(registerSome(response.data.addedUser, response.data.success))
        }
    } catch (e) {
        dispatch(changeIsLoading(false))
        let message: null | string = null
        if (e.response.data.error.length === 0) {
            message = 'Sorry some error'
        } else {
            message = e.response.data.error
            if (message) {
                let messageArr = message.split("")
                let messageto = messageArr.indexOf("/")
                if (messageto !== -1) {
                    messageArr = messageArr.splice(0, messageto)
                }
                message = messageArr.join("")
                dispatch(addError(message))
            }
        }


    } finally {
    }
}
