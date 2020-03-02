import React from 'react';
import SignIn from "./SignIn";
import {connect} from 'react-redux';
import {ISignInState} from "../sign-in-bll/redux/signInInitialState";
import {signInThunk} from "../sign-in-bll/redux/signInThunk";
import {signInEmailChange, signInPasswordChange, signInRememberMeChange} from "../sign-in-bll/redux/signInActions";
import {IAppStore} from "../../../../neko-1-main/m-2-bll/store";
import {Redirect} from 'react-router-dom';

const SignInContainer: React.FC<ISignInState & MapDispatchToPropsType> = (
    {email, password, rememberMe, auth, signInThunk, signInEmailChange, signInPasswordChange, signInRememberMeChange}
) => {

    if (auth) {
        return <Redirect to="/profile"/>
    }
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

export type MapDispatchToPropsType = {
    signInThunk: (email: string, password: string, rememberMe: boolean) => void
    signInEmailChange: (email: string) => void
    signInPasswordChange: (password: string) => void
    signInRememberMeChange: (rememberMe: boolean) => void
}
type MapStateToPropsType = {
    email: string
    password: string
    rememberMe: boolean
    auth: boolean
}
let mapStateToProps = (state: IAppStore) => {
    return {
        email: state.signIn.email,
        password: state.signIn.password,
        rememberMe: state.signIn.rememberMe,
        auth: state.signIn.auth
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, IAppStore>
(mapStateToProps, {signInThunk, signInEmailChange, signInPasswordChange, signInRememberMeChange})
(SignInContainer);
