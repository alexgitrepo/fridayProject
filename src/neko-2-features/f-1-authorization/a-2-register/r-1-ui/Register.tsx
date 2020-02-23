import React, {ChangeEvent, useState} from 'react';
import {NavLink, Redirect} from "react-router-dom";
import {SIGN_IN_PATH} from "../../../../neko-1-main/m-1-ui/Routes";
import style from './Register.module.css'

interface IRegisterProps {
    isRegistered: boolean
    registerRequest: (email:string,password:string)=>void
    errorMessage:string|null
    isLoading:boolean
}

const Register: React.FC<IRegisterProps> = ({isRegistered, registerRequest,errorMessage,isLoading}) => {
    let [email, emailSet] = useState("")
    let [passwordFirst, firstPasswordSet] = useState("")
    let [passwordSecond, SecondPasswordSet] = useState("")
    let [passwordError, changePasswordErrorState] = useState(false)
    const register = () => {
        if (passwordFirst !== passwordSecond) {
            changePasswordErrorState(true)

        } else {
            registerRequest(email, passwordSecond)
            changePasswordErrorState(false)
        }
    }
    const emailOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        emailSet(e.currentTarget.value)
    }
    const FirstPasswordOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        firstPasswordSet(e.currentTarget.value)
    }
    const SecondPasswordOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        SecondPasswordSet(e.currentTarget.value)
    }

    if (isRegistered) {
        return <Redirect to={SIGN_IN_PATH}/>
    }

    return (

        <div className={style.register}>
            register
            {isLoading &&<div>Погоди чувачок мы обрабатываем твой запрос...</div> }
            {errorMessage &&<div className={style.error}>{errorMessage}</div> }
            {passwordError && <div className={style.error}>Passwords do not match</div>}
            <input onChange={emailOnchange} type="text" placeholder="enter e-mail" value={email}/>
            <input onChange={FirstPasswordOnchange} type="password" placeholder="enter password" value={passwordFirst}/>
            <input onChange={SecondPasswordOnchange} type="password" placeholder="repeat password"
                   value={passwordSecond}/>
            <button onClick={register}>Register</button>
            <NavLink to={SIGN_IN_PATH}>sign in</NavLink>
        </div>
    );
};

export default Register;
