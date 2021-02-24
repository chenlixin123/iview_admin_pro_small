//车位使用情况
import request from '@/plugins/request';
export function usage(params) {
    return request({
        url: '/api/usage_text',
        method: 'post',
        params
    });
}
export function usage_pie(params) {
    return request({
        url: '/api/usage_pie',
        method: 'post',
        params
    });
}
export function usage_line(params) {
    return request({
        url: '/api/usage_line',
        method: 'post',
        params
    });
}
//车位活跃天数
export function active(params) {
    return request({
        url: '/api/active_text',
        method: 'post',
        params
    });
}
export function active_pie(params) {
    return request({
        url: '/api/active_pie',
        method: 'post',
        params
    });
}
export function active_line(params) {
    return request({
        url: '/api/active_line',
        method: 'post',
        params
    });
}
//车位时间利用率
export function utilize(params) {
    return request({
        url: '/api/utilize_text',
        method: 'post',
        params
    });
}
export function utilize_line(params) {
    return request({
        url: '/api/utilize_line',
        method: 'post',
        params
    });
}
//车位使用时长
export function parking(params) {
    return request({
        url: '/api/parking_text',
        method: 'post',
        params
    });
}
export function parking_number_line(params) {
    return request({
        url: '/api/parking_number_line',
        method: 'post',
        params
    });
}
export function parking_frequency_line(params) {
    return request({
        url: '/api/parking_frequency_line',
        method: 'post',
        params
    })
}