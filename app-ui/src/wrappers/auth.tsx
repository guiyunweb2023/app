import {Navigate, Outlet} from 'umi'
import {useAccess} from "@umijs/max";
import Cookies from "js-cookie";

export default () => {

    const isLogin = Cookies.get('token')
    if (isLogin) {
        return <Outlet/>;
    } else {
        return <Navigate to="/login"/>;
    }
}