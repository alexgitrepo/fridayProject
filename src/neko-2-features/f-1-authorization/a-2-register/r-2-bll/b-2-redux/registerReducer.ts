import {IRegisterState, registerInitialState} from "./registerInitialState";
import {IRegisterActions, REGISTER, REGISTER_ERROR, REGISTER_LOADING} from "./registerActions";

export const registerReducer = (state = registerInitialState, action: IRegisterActions):IRegisterState => {
    switch (action.type) {
        case REGISTER: { // blank
            return {
                ...state, CurrentUser: {...action.CurrentUser},
                success: action.success
            }
        }
        case REGISTER_ERROR: { // blank
            return {
                ...state,message: action.message
            }
        }
        case REGISTER_LOADING: { // blank
            return {
                ...state,isLoading: action.isLoading
            }
        }


        default: {
            return state;
        }
    }
};
