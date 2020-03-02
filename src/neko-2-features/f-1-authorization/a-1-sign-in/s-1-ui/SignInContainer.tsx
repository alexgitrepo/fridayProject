import React from 'react';
import SignIn from "./SignIn";
import {connect} from 'react-redux';
import {ISignInState} from "../s-2-bll/b-2-redux/signInInitialState";
import {signInThunk} from "../s-2-bll/signInThunk";
import {signInEmailChange, signInPasswordChange, signInRememberMeChange} from "../s-2-bll/b-2-redux/signInActions";
import {IAppStore} from "../../../../neko-1-main/m-2-bll/store";

const SignInContainer: React.FC<ISignInState & MapDispatchToPropsType> = (
    {email, password, rememberMe, signInThunk, signInEmailChange, signInPasswordChange, signInRememberMeChange}
) => {

    return (
        <SignIn email={email}
                password={password}
                rememberMe={rememberMe}
                signInThunk={signInThunk}
                signInEmailChange={signInEmailChange}
                signInPasswordChange={signInPasswordChange}
                signInRememberMeChange={signInRememberMeChange}
        />
    );
};

let mapStateToProps = (state: IAppStore) => {
    return {
        email: state.signIn.email,
        password: state.signIn.password,
        rememberMe: state.signIn.rememberMe
    }
}

export type MapDispatchToPropsType = {
    signInThunk: (email: string, password: string, rememberMe: boolean) => void
    signInEmailChange: (email: string) => void
    signInPasswordChange: (password: string) => void
    signInRememberMeChange: (rememberMe: boolean) => void
}

export default connect<ISignInState, MapDispatchToPropsType, {}, IAppStore> (mapStateToProps, {
    signInThunk, signInEmailChange,
    signInPasswordChange, signInRememberMeChange
})(SignInContainer);
