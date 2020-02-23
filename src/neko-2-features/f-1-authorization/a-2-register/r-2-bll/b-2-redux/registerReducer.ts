import {registerInitialState} from "./registerInitialState";
import {IRegisterActions, REGISTER} from "./registerActions";

export const registerReducer = (state = registerInitialState, action: IRegisterActions) => {
    switch (action.type) {
        case REGISTER: { // blank
            return {
                ...state, CurrentUser:{...action.CurrentUser},
                success:action.success

            }
        }

        default: {
            return state;
        }
    }
};
