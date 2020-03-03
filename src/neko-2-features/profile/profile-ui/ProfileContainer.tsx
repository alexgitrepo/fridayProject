import Profile from "./Profile";
import { connect } from "react-redux";
import {IAppStore} from "../../../neko-1-main/m-2-bll/store";

type mapStateToPropsType = {
    auth: boolean

}

const mapStateToProps = (state: IAppStore): mapStateToPropsType => {
    return {
        auth: state.signIn.auth
    }
}

export default connect(mapStateToProps, null)(Profile)