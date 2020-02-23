import React, {FC} from 'react';
import {Redirect} from "react-router";
import {SIGN_IN_PATH} from "../../../../neko-1-main/m-1-ui/Routes";
import Register from './Register';
import {connect} from "react-redux";
import {IAppStore} from "../../../../neko-1-main/m-2-bll/store";
import {Dispatch} from "redux";
import {register} from "../r-2-bll/registerThunk";
import { ThunkDispatch } from 'redux-thunk';
import {IAppActions, IRegisterActions} from "../r-2-bll/b-2-redux/registerActions";


const RegisterContainer: React.FC<IMapStateToProps&IMapDispatchToProps> = (props) => {
  return (
        <Register isLoading={props.isLoading} errorMessage={props.errorMessage} isRegistered={props.isRegistered} registerRequest={props.registerRequest}

        />
    );
};
interface IMapStateToProps {
    isRegistered:boolean
    errorMessage:null|string
    isLoading:boolean
}
interface IMapDispatchToProps {
    registerRequest:(email:string,password:string)=>void
}
let mapStateToProps=(state:IAppStore):IMapStateToProps=>{
    return {isRegistered:state.register.success,
        errorMessage:state.register.message,
        isLoading:state.register.isLoading}
}
let mapDispatchToProps=(dispatch: ThunkDispatch<any,any,IAppActions>):IMapDispatchToProps=>{
    return {registerRequest:(email:string,password:string)=>{dispatch(register(email,password))}}
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterContainer)

