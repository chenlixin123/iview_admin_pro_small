import request from '@/plugins/request';
//系统设置   详情
export function setup_find_by_id(params) {
    return request({
        url: '/admin/biz/prefecture/find-by-id',
        method: 'get',
        params
    });
}

//系统设置   更新设置
export function setup_updateDay(params) {
    return request({
        url: '/admin/biz/prefecture/updateDay',
        method: 'post',
        params
    });
}