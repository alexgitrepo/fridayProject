import React, {useEffect, useState} from 'react';
import {Redirect} from "react-router-dom";
import {NEKO_PATH} from "../../../../neko-1-main/m-1-ui/Routes";
import SignIn from "./SignIn";
import Disconnect from "./Disconnect";
import {connect} from 'react-redux';
import {ISignInState} from "../s-2-bll/b-2-redux/signInInitialState";
import {signIn} from "../s-2-bll/signInThunk";
import {signInSome} from "../s-2-bll/b-2-redux/signInActions";

export interface MethodsInterface {
    signIn: Function,
}

const SignInContainer: React.FC<ISignInState & MethodsInterface> = ({email,password,rememberMe,signIn}) => {

    return (
        <SignIn email={email}
                password={password}
                rememberMe={rememberMe}
                signIn={signIn}
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

export default connect(mapStateToProps, {signIn})(SignInContainer);
