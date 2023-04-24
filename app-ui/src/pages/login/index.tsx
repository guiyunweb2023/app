import styles from './index.less';
// @ts-ignore
import {Button, Form, Input, message} from "antd";
import {Helmet} from "react-helmet";
import React from "react";
import {login} from "@/api/auth";
import Cookies from 'js-cookie'
import {history} from 'umi';
import {useModel} from "@umijs/max";
import {flushSync} from "react-dom";

export default function () {

    const {setInitialState} = useModel('@@initialState');

    const onFinish = (values: any) => {
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
        <div className={styles.app}>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>登录</title>
            </Helmet>
            <div className={styles.login}>
                <h1>登录</h1>
                <Form autoComplete="off" onFinish={onFinish}>
                    <Form.Item name="account" rules={[{required: true, message: '请输入账户名'}]}>
                        <Input placeholder="用户名"/>
                    </Form.Item>
                    <Form.Item name="password" rules={[{required: true, message: '请输入密码'}]}>
                        <Input.Password placeholder="密码"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}