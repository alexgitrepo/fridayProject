import {signInInitialState} from "./signInInitialState";
import {SIGN_IN, SIGN_IN_EMAIL, SIGN_IN_PASSWORD, SIGN_IN_REMEMBER_ME, SignInAllActionsType} from "./signInActions";

export const signInReducer = (state = signInInitialState, action: SignInAllActionsType) => {
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
        default: {
            return state;
        }
    }
};
