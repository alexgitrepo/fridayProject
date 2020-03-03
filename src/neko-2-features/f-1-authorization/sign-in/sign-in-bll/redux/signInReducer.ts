import {ISignInState, signInInitialState} from "./signInInitialState";
import {
    SIGN_IN,
    SIGN_IN_EMAIL,
    SIGN_IN_ERROR,
    SIGN_IN_PASSWORD,
    SIGN_IN_REMEMBER_ME,
    SIGN_IN_SUCCESS,
    SignInAllActionsType
} from "./signInActions";

export const signInReducer = (state = signInInitialState, action: SignInAllActionsType): ISignInState => {
    switch (action.type) {
        case SIGN_IN_EMAIL:
            return {
                ...state,
                email: action.email
            };
        case SIGN_IN_PASSWORD:
            return {
                ...state,
                password: action.password
            };
        case SIGN_IN_REMEMBER_ME:
            return{
                ...state,
                rememberMe: action.rememberMe
            }
        case SIGN_IN: {
            return {
                ...state,
                email: state.email,
                password: state.password,
                rememberMe: state.rememberMe
            }
        }
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                auth: true
            };
        case SIGN_IN_ERROR:
            debugger
            return {
                ...state,
                error: action.error
            }
        default: {
            return state;
        }

    }
};
