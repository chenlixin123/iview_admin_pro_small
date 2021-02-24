import request from '@/plugins/request';
//车位日志   列表
export function Journal_car_list(params) {
    return request({
        url: '/admin/biz/fixed/rent/stall_log_list',
        method: 'post',
        params
    });
}

//系统日志   列表
export function Journal_system_list(params) {
    return request({
        url: '/admin/biz/fixed/change/list',
        method: 'post',
        params
    });
}