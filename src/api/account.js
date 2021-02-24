import request from '@/plugins/request';

export function AccountLogin(params) {
    return request({
        url: '/admin/auth/login',
        method: 'post',
        params
    });
}
export function AccountLogout(params) {
    return request({
        url: '/admin/auth/logout',
        method: 'post',
        params
    });
}

export function AccountRegister(params) {
    return request({
        url: '/admin/auth/logout',
        method: 'post',
        params
    });
}

export function AccountUpdate(params) {
    return request({
        url: '/admin/auth/update_password',
        method: 'post',
        params
    });
}