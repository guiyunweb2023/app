import type {RequestConfig} from 'umi';
// @ts-ignore
import {message} from 'antd';
import Cookies from "js-cookie";


export const requestConfig: RequestConfig = {
    timeout: 1000,
    errorConfig: {
        errorHandler() {
        },
        errorThrower() {
        }
    },
    requestInterceptors: [
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        authHeaderInterceptor
    ],
    responseInterceptors: [
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        returnInterceptors
    ]
};


function authHeaderInterceptor(config: any) {
    console.log()
    // 拦截请求配置，进行个性化处理。
    // const url = config.url
    const token = Cookies.get('token')
    if (token){
        config.headers['Authorization'] = 'Bearer ' + token // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return {...config};
}

function returnInterceptors(response: any) {
    const {data = {} as any, config} = response;
    if (!data.success && data.showType) {
        message.error({
            content: data.message
        });
    }
    if (data.success) {
        return response.data
    } else {
        return Promise.reject(data.message)
    }
}
