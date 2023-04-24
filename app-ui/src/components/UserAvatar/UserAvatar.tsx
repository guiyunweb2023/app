import React from "react";
// @ts-ignore
import {Avatar, Button, Dropdown, MenuProps} from "antd";
import {history} from "@@/core/history";

const items: MenuProps['items'] = [
    {
        key: 'logout',
        label: '退出登录',
        onClick: ()=>{
            console.log("退出登录")
            clearAllCookie()
            history.push('/login');
        }
    },
];

function clearAllCookie() {
    let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if(keys) {
        for(let i = keys.length; i--;)
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
}

const UserAvatar: React.FC = () => {
    return (
        <Dropdown menu={{items}}>
            <Avatar>孟源运</Avatar>
        </Dropdown>
    )
}

export default UserAvatar;