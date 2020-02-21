import {instance} from "../../../../base-url";


export interface IRegisterData {

}

export const RegisterAPI = {
sendRegistrationRequest:(email:string,password:string)=>{
    return instance.post(`auth/register`,{email,password})
}
};
