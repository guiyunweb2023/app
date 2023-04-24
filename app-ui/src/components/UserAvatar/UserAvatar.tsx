import React from "react";
// @ts-ignore
import {Avatar, Button, Dropdown, MenuProps} from "antd";
import {history} from "@@/core/history";
import Cookies from "js-cookie";
import {useModel} from "@umijs/max";


const UserAvatar: React.FC = () => {

    const {initialState} = useModel('@@initialState');


    const items: MenuProps['items'] = [
        {
            key: 'logout',
            label: '退出登录',
            onClick: () => {
                console.log("退出登录")
                Cookies.remove("token")
                history.push('/login');
            }
        },
    ];

    const username: string = initialState.username

    // @ts-ignore
    return (
        <Dropdown menu={{items}}>
            <Avatar>{username}</Avatar>
        </Dropdown>
    )
}

export default UserAvatar;