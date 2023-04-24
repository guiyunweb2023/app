import {request} from '@umijs/max';

export function login(data = {}) {
    return request<any>('/api/auth/login', {
        method: 'post',
        data,
    },);
}

export function getUser() {
    return request<any>('/api/users/currentUser', {
        method: 'get'
    },);
}
