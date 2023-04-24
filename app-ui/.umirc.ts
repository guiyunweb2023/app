import {defineConfig} from '@umijs/max';

export default defineConfig({
    antd: {},
    access: {},
    model: {},
    initialState: {},
    request: {},
    layout: {
        title: 'App Admin',
        locale: false,
    },
    routes: [
        {
            path: '',
            flatMenu: true,
            wrappers: ['@/wrappers/auth',],
            access: 'admin',
            routes: [
                {
                  path: '/',
                  redirect: '/home',
                },
                {
                    name: '首页',
                    path: '/home',
                    component: './Home',
                },
                {
                    name: '权限演示',
                    path: '/access',
                    component: './Access',
                },
                {
                    name: ' CRUD 示例',
                    path: '/table',
                    component: './Table',
                },
            ]
        },
        {
            path: '/login',
            component: '@/pages/login',
            layout: false
        },
        {
            path: '/*',
            component: '@/pages/404',
            layout: false
        },
    ],
    proxy: {
        '/api': {
            'target': 'http://101.91.230.92:12102',
            'changeOrigin': true,
            'pathRewrite': {'^/api': ''},
        },
    },
    npmClient: 'yarn',
});

