import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {NEKO_PATH} from "../../../../neko-1-main/m-1-ui/Routes";

interface IDisconnectProps {

}

const Disconnect: React.FC<IDisconnectProps> = () => {

    console.log('render Disconnect');
    return (
        <div>
            <button>logout</button>
            <NavLink to={NEKO_PATH}>Neko Profile</NavLink>
        </div>
    )
};

export default Disconnect;
