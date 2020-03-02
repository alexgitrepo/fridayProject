import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {
    SIGN_IN_PATH, REGISTER_PATH, FORGOT_PATH,
    NEKO_PATH
} from './Routes';
import styles from './Header.module.sass'

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="https://image.flaticon.com/icons/svg/919/919832.svg" alt=""/>
            </div>
            <NavLink to={SIGN_IN_PATH}>sign-in</NavLink>
            <NavLink to={REGISTER_PATH}>register</NavLink>
            <NavLink to={FORGOT_PATH}>forgot</NavLink>

            <NavLink to={NEKO_PATH}>neko</NavLink>
        </header>
    );
};

export default Header;
