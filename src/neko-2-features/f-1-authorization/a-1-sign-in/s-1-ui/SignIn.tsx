import React, {useState} from 'react';
import {ISignInState} from "../s-2-bll/b-2-redux/signInInitialState";

interface MethodsInterface {
    signInThunk: Function
    signInEmailChange: Function,
    signInPasswordChange: Function,
    signInRememberMeChange: Function
}

const SignIn: React.FC<ISignInState & MethodsInterface> = (
    {email, password, rememberMe, signInThunk, signInEmailChange, signInPasswordChange, signInRememberMeChange}
) => {
    const handleSignIn = () => {
        signInThunk()
    };
    const emailChange = (e: any) => {
        signInEmailChange(e.target.value)
    };
    const passwordChange = (e: any) => {
        signInPasswordChange(e.target.value);
    };
    const rememberMeChange = (e: any) => {
        signInRememberMeChange(e.target.checked)
    };
    console.log('render SignIn');
    return (
        <div>
            <input type="text" onChange={emailChange} value={email} placeholder={"your login"}/>
            <br/>
            <input type="text" onChange={passwordChange} value={password} placeholder={"your password"}/>
            <br/>
            <label htmlFor="rememberMe">Remember me</label>
            <input type="checkbox" onChange={rememberMeChange} name={"rememberMe"} checked={rememberMe}/>
            <br/>
            <button onClick={handleSignIn}>Sign in*</button>
        </div>
    );
};

export default SignIn;
