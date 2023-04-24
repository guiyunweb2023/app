import {request} from '@umijs/max';

export default function login(data = {}) {
    return request<any>('/api/auth/login', {
        method: 'post',
        data,
    },);
}
