import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkMiddleware} from "redux-thunk"
import {signInReducer} from "../../neko-2-features/f-1-authorization/sign-in/sign-in-bll/redux/signInReducer";
import {registerReducer} from "../../neko-2-features/f-1-authorization/a-2-register/r-2-bll/b-2-redux/registerReducer";
import {forgotReducer} from "../../neko-2-features/f-1-authorization/a-3-forgot/f-2-bll/b-2-redux/forgotReducer";
import {nekoReducer} from "../../neko-2-features/f-4-social/s-1-neko/n-2-bll/b-2-redux/nekoReducer";
import {IAppActions} from "../../neko-2-features/f-1-authorization/a-2-register/r-2-bll/b-2-redux/registerActions";

const reducers = combineReducers({
    signIn: signInReducer,
    register: registerReducer,
    forgot: forgotReducer,
    neko: nekoReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware as ThunkMiddleware<IAppStore,IAppActions>));

export default store

export type IAppStore = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
