import React from 'react';
import {NavLink} from "react-router-dom";
import {SIGN_IN_PATH} from "../../../../neko-1-main/m-1-ui/Routes";
import style from'./Register.module.css'

interface IRegisterProps {

}

const Register: React.FC<IRegisterProps> = (
    {

    }
) => {


    return (
        <div className={style.register}>
            register
            <input type="text" placeholder="enter e-mail"/>
            <input type="password" placeholder="enter password" />
            <input type="password" placeholder="repeat password"/>
            <button>Register</button>
            <NavLink to={SIGN_IN_PATH}>sign in</NavLink>

        </div>
    );
};

export default Register;
