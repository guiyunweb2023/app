// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
// import {RequestConfig} from "@umijs/max";
import {requestConfig} from "@/api";
// @ts-ignore
import {Avatar, Dropdown, MenuProps} from "antd";
import UserAvatar from "@/components/UserAvatar";

export async function getInitialState(): Promise<{ access: string }> {
    return {access: 'admin'};
}

export const layout = () => {
    return {
        logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        menu: {
            locale: false,
        },
        layout: 'mix',
        rightRender: (initialState: any) => {
            return (
               <UserAvatar />
            )
        }
    };
};

export const request = {
    ...requestConfig,
};
