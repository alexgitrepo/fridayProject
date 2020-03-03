import React, {FC} from 'react';
import {MapDispatchToPropsType} from "./SignInContainer";

type Props = {
    email: string
    password: string
    rememberMe: boolean
    error: null | string
}
const SignIn: FC<Props & MapDispatchToPropsType> = (
    {email, password, rememberMe, error, signInThunk, signInEmailChange, signInPasswordChange, signInRememberMeChange}
) => {
    const handleSignIn = () => {
        signInThunk(email, password, rememberMe)
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
    return (
        <div className="form">
            {error && <div className="error-message">{error}</div>}
            <input type="text" onChange={emailChange} value={email} placeholder={"your login"}/>
            <br/>
            <input type="text" onChange={passwordChange} value={password} placeholder={"your password"}/>
            <br/>
            <label htmlFor="rememberMe">Remember me</label>
            <input type="checkbox" onChange={rememberMeChange} name={"rememberMe"} checked={rememberMe}/>
            <br/>
            <button onClick={handleSignIn}>Sign in</button>
        </div>
    );
};

export default SignIn;
