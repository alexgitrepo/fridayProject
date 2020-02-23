import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FORGOT_PATH, REGISTER_PATH} from "../../../../neko-1-main/m-1-ui/Routes";
import {ISignInState} from "../s-2-bll/b-2-redux/signInInitialState";

interface MethodsInterface {
    signIn: Function
}

const SignIn: React.FC<ISignInState & MethodsInterface> = (
    {email, password, rememberMe, signIn}
) => {
    const handleSignIn = () => {
        signIn(emailState, passwordState, rememberMeState)
    }
    const [emailState, setEmail] = useState(email);
    const [passwordState, setPassword] = useState(password);
    const [rememberMeState, setRememberMe] = useState(rememberMe);

    const emailChange = (e: any) => {
        setEmail(e.target.value)
    }

    const passwordChange = (e: any) => {
        setPassword(e.target.value);
    };
    const rememberMeChange = (e: any) => {
        setRememberMe(!e.target.checked)
    }
    console.log('render SignIn');
    return (
        <div>
            <input type="text" onChange={emailChange} value={emailState} placeholder={"your login"}/>
            <br/>
            <input type="text" onChange={passwordChange} value={passwordState} placeholder={"your password"}/>
            <br/>
            <label htmlFor="rememberMe">Remember me</label>
            <input type="checkbox" onChange={rememberMeChange} name={"rememberMe"} checked={rememberMeState}/>
            <br/>
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
};

export default SignIn;
