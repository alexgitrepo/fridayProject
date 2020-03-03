import React from 'react'
import { Redirect } from 'react-router-dom'
import { SIGN_IN_PATH } from '../../../neko-1-main/m-1-ui/Routes'
const Profile = (props: any) => {
    if(!props.auth){
        return <Redirect to={SIGN_IN_PATH}/>
    }
    return(
        <p>Welcome</p>
    )

}
export default Profile