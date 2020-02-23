import {instance} from "../../../../base-url";
import { ISignInState } from "../s-2-bll/b-2-redux/signInInitialState";

export const SignInAPI = (formData: ISignInState) =>{
    return instance.post('auth/login', formData)

};
