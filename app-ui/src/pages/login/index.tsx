// @ts-ignore
import {message} from "antd";
import React from "react";
import {login} from "@/api/auth";
import Cookies from 'js-cookie'
import {history} from 'umi';
import {useModel} from "@umijs/max";
import {flushSync} from "react-dom";
// @ts-ignore
import {LoginFormPage} from "@ant-design/pro-form";
// @ts-ignore
import {ProFormText} from "@ant-design/pro-components";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Helmet} from "react-helmet";

export default function () {

    const {setInitialState} = useModel('@@initialState');

    const submitLogin = (values: any) => {
        console.log('Success:', values);
        // let data = login(values)
        login(values).then(res => {
            message.success("登录成功")
            Cookies.set('token', res.token)

            flushSync(() => {
                setInitialState((s: any) => {
                    return ({
                        ...s,
                        ...res.user
                    });
                });
            });

            history.push('/home');
        })
        // console.log('res:', JSON.stringify(data));
    };


    return (
        <div style={{backgroundColor: '#1f5abc', height: '100vh'}}>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>登录</title>
            </Helmet>
            <LoginFormPage
                logo='https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg'
                title="登录"
                onFinish={async (values) => {
                    await submitLogin(values);
                }}
                backgroundImageUrl="https://file.iviewui.com/admin-cloud-dist/img/banner-3.8fb23f4b.png">
                <div style={{ marginBlock: '48px 0' }}>
                    <ProFormText
                        name="account"
                        fieldProps={{
                            prefix: <UserOutlined className={'prefixIcon'}/>,
                        }}
                        placeholder={'请输入用户名'}
                        rules={[
                            {
                                required: true,
                                message: '用户名不能为空!',
                            },
                        ]}
                    />

                    <ProFormText.Password
                        name="password"
                        fieldProps={{
                            prefix: <LockOutlined className={'prefixIcon'}/>,
                        }}
                        placeholder={'请输入密码'}
                        rules={[
                            {
                                required: true,
                                message: '密码不能为空！',
                            },
                        ]}
                    />
                </div>
            </LoginFormPage>
        </div>
    )
}