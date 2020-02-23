import {ICurrentUser} from "./registerInitialState";

export const REGISTER_LOADING = 'REGISTER/LOADING';
export const REGISTER_ERROR = 'REGISTER/ERROR';
export const REGISTER_SUCCESS = 'REGISTER/SUCCESS';


export const REGISTER = 'REGISTER/SOME';

interface IRegisterSome { // blank
    type: typeof REGISTER;
    CurrentUser: ICurrentUser
    success: boolean
}

interface IRegisterError { // blank
    type: typeof REGISTER_ERROR;
    message: string|null
}

interface IRegisterLoading{
    type: typeof REGISTER_LOADING;
    isLoading:boolean
}


export type IRegisterActions = IRegisterSome|IRegisterError|IRegisterLoading;
export type IAppActions = IRegisterActions //Then we will add here another page actions |

export const registerSome = (CurrentUser: ICurrentUser, success: boolean): IRegisterActions => ({ // blank
    type: REGISTER,
    CurrentUser,
    success
});
export const addError = (message:null|string): IRegisterActions => ({ // blank
    type: REGISTER_ERROR,
    message
});
export const changeIsLoading = (isLoading:boolean): IRegisterActions => ({ // blank
    type: REGISTER_LOADING,
    isLoading
});

