import React from 'react';
import {NavLink} from "react-router-dom";
import {FORGOT_PATH, REGISTER_PATH} from "../../../../neko-1-main/m-1-ui/Routes";

interface ISignInProps {

}

const SignIn: React.FC<ISignInProps> = (
    {

    }
) => {

    console.log('render SignIn');
    return (
        <div>
            <form action="">
                <input type="text" placeholder={"your login"}/>
                <br/>
                <input type="text" placeholder={"your password"}/>
                <br/>
                <button>Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
