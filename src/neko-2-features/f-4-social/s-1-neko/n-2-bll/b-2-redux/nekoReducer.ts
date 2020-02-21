import {nekoInitialState} from "./nekoInitialState";
import {INekoActions, NEKO_SET_NAME} from "./nekoActions";

export const nekoReducer = (state = nekoInitialState, action: INekoActions) => {
    switch (action.type) {


        default: {
            return state;
        }
    }
};
