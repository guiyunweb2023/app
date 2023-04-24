import type { RequestConfig } from 'umi';
// @ts-ignore
import { message } from 'antd';


export const requestConfig:RequestConfig = {
    timeout: 1000,
    errorConfig: {
        errorHandler(){
        },
        errorThrower(){
        }
    },
    requestInterceptors: [authHeaderInterceptor],
    responseInterceptors: [
        returnInterceptors
    ]
};


function authHeaderInterceptor(config: any) {
    console.log()
    // 拦截请求配置，进行个性化处理。
    // const url = config.url
    return {...config};
}

function returnInterceptors(response: any){
    const { data = {} as any, config } = response;
    if(!data.success && data.showType){
        message.error({
            content: data.message
        });
    }
    if (data.success) {
        return response.data
    }else {
        return Promise.reject(data.message)
    }
}
