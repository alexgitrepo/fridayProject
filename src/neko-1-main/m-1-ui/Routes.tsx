import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import SignInPage from '../../neko-2-features/f-1-authorization/sign-in/sign-in-ui/SignInPage';
import RegisterPage
    from '../../neko-2-features/f-1-authorization/a-2-register/r-1-ui/RegisterPage';
import ForgotPage from '../../neko-2-features/f-1-authorization/a-3-forgot/f-1-ui/ForgotPage';
import NekoPage from "../../neko-2-features/f-4-social/s-1-neko/n-1-ui/NekoPage";
import ProfileContainer from '../../neko-2-features/profile/profile-ui/ProfileContainer';

// all project paths
export const SIGN_IN_PATH = '/sign-in';
export const REGISTER_PATH = '/register';
export const FORGOT_PATH = '/forgot';
export const PROFILE_PATH = '/profile';

export const NEKO_PATH = '/neko'; // profile

const Routes: React.FC = () => {
    return (
        <main>
            <Switch>
                <Route path={PROFILE_PATH} render={() => <ProfileContainer/>}/>
                <Route path={SIGN_IN_PATH} render={() => <SignInPage/>}/>
                <Route path={REGISTER_PATH} render={() => <RegisterPage/>}/>
                <Route path={FORGOT_PATH} render={() => <ForgotPage/>}/>

                <Route path={NEKO_PATH} render={() => <NekoPage/>}/>
                <Route exact path={'/'} render={() => <Redirect to={PROFILE_PATH}/>}/>
            </Switch>
        </main>
    );
};

export default Routes;
