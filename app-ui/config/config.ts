import {defineConfig} from '@umijs/max';
import routes from "./routes";

export default defineConfig({
    /**
     * @name 开启 hash 模式
     * @description 让 build 之后的产物包含 hash 后缀。通常用于增量发布和避免浏览器加载缓存。
     * @doc https://umijs.org/docs/api/config#hash
     */
    hash: true,
    /**
     * @name 路由的配置，不在路由中引入的文件不会编译
     * @description 只支持 path，component，routes，redirect，wrappers，title 的配置
     * @doc https://umijs.org/docs/guides/routes
     */
    routes,
    antd: {},
    access: {},
    model: {},
    initialState: {},
    request: {},
    layout: {
        title: 'App Admin',
        locale: false,
    },
    proxy: {
        '/api': {
            'target': 'http://127.0.0.1:8089',
            'changeOrigin': true,
            'pathRewrite': {'^/api': ''},
        },
    },
    npmClient: 'yarn',
})