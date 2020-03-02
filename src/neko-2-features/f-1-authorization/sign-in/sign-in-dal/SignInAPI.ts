import {instance} from "../../../../base-url";
import { ISignInState } from "../sign-in-bll/redux/signInInitialState";

type SignInType = {
    email: string
    password: string
    rememberMe: boolean
}
export const SignInAPI = (formData: SignInType) =>{
    return instance.post('auth/login', formData)

};
