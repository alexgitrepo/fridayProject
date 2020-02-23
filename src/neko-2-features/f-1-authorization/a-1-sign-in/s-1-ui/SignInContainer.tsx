import React from 'react';
import SignIn from "./SignIn";
import {connect} from 'react-redux';
import {ISignInState} from "../s-2-bll/b-2-redux/signInInitialState";
import {signInThunk} from "../s-2-bll/signInThunk";
import {signInEmailChange, signInPasswordChange, signInRememberMeChange} from "../s-2-bll/b-2-redux/signInActions";

export interface MethodsInterface {
    signInThunk: Function,
    signInEmailChange: Function,
    signInPasswordChange: Function,
    signInRememberMeChange: Function
}

const SignInContainer: React.FC<ISignInState & MethodsInterface> = (
    {email, password, rememberMe, signInThunk ,signInEmailChange , signInPasswordChange, signInRememberMeChange}
    ) => {

    return (
        <SignIn email={email}
                password={password}
                rememberMe={rememberMe}
                signInThunk={signInThunk}
                signInEmailChange={signInEmailChange}
                signInPasswordChange={ signInPasswordChange}
                signInRememberMeChange={signInRememberMeChange}
        />
    );
};

let mapStateToProps = (state: any) => {
    return {
        email: state.signIn.email,
        password: state.signIn.password,
        rememberMe: state.signIn.rememberMe
    }
}

export default connect(mapStateToProps, {
    signInThunk, signInEmailChange,
    signInPasswordChange, signInRememberMeChange
})(SignInContainer);
