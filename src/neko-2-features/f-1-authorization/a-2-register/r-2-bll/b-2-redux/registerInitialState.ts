export interface IRegisterState { // blank
    CurrentUser: ICurrentUser,
    success: boolean,
    message:null|string,
    isLoading:boolean
}


export interface ICurrentUser {
    email: null | string
    isAdmin: null | boolean
    password: null | string,
    __v: null | number
    _id: null | string

}

export const registerInitialState: IRegisterState = {
    CurrentUser: {
        email: null,
        isAdmin: false,
        password: null,
        __v: null,
        _id: null
    },
    success: false,
    message:null,
    isLoading:false
};
