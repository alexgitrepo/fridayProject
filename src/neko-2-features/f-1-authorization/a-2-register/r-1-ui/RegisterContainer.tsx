import React from 'react';
import {Redirect} from "react-router";
import {SIGN_IN_PATH} from "../../../../neko-1-main/m-1-ui/Routes";
import Register from './Register';
import {connect} from "react-redux";
import {IAppStore} from "../../../../neko-1-main/m-2-bll/store";
import {Dispatch} from "redux";
import {register} from "../r-2-bll/registerThunk";


const RegisterContainer = (props:IMapStateToProps&IMapDispatchToProps) => {




    return (
        <Register isRegistered={props.isRegistered} registerRequest={props.registerRequest}

        />
    );
};
interface IMapStateToProps {
    isRegistered:boolean
}
interface IMapDispatchToProps {
    registerRequest:any
}
let mapStateToProps=(state:IAppStore):IMapStateToProps=>{
    return {isRegistered:state.register.success}
}
let mapDispatchToProps=(dispatch:any):IMapDispatchToProps=>{
    return {registerRequest:(email:string,password:string)=>{dispatch(register(email,password))}}
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterContainer)

