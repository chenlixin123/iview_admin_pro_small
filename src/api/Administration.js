import request from '@/plugins/request';
// 车位管理列表（分页）
export function Administration_rent_list(params) {
    return request({
        url: '/admin/biz/fixed/rent/list',
        method: 'post',
        params
    });
}
//楼层、车位接口
export function Administration_floor(params) {
    return request({
        url: '/admin/biz/stall/floor-stall-list',
        method: 'get',
        params
    });
}

//车位管理 启用车位接口
export function Administration_open(params) {
    return request({
        url: '/admin/biz/fixed/rent/status/open',
        method: 'post',
        params
    });
}

//车位管理 禁用车位接口
export function Administration_close(params) {
    return request({
        url: '/admin/biz/fixed/rent/status/close',
        method: 'post',
        params
    });
}

//车位管理 删除车位接口
export function Administration_delete(params) {
    return request({
        url: '/admin/biz/fixed/rent/delete/stall',
        method: 'post',
        params
    });
}

//车位管理 查看包月信息接口
export function Administration_view(params) {
    return request({
        url: '/admin/biz/fixed/rent/view',
        method: 'get',
        params
    });
}

//车位管理 操作记录列表接口
export function Administration_change(params) {
    return request({
        url: '/admin/biz/fixed/change/list',
        method: 'post',
        params
    });
}

//车位管理 修改包月信息接口
export function Administration_update(params) {
    return request({
        url: '/admin/biz/fixed/rent/update',
        method: 'post',
        params
    });
}

//车位管理 添加包月信息
export function Administration_save(params) {
    return request({
        url: '/admin/biz/fixed/rent/save',
        method: 'post',
        params
    });
}

//车位管理 批量导入授权
// export function Administration_batchSave(data) {
//     return request({
//         url: '/admin/biz/fixed/rent/batchSave',
//         method: 'post',
//         data
//     });
// }

//用户管理 用户管理列表
export function Administration_user_list(params) {
    return request({
        url: '/admin/biz/fixed/user/list',
        method: 'post',
        params
    });
}
//用户管理  关闭与开启
export function Administration_user_open_close(params) {
    return request({
        url: '/admin/biz/fixed/user/pick',
        method: 'post',
        params
    });
}

//用户管理  新增用户
export function Administration_user_save(params) {
    return request({
        url: '/admin/biz/fixed/userinfo/save',
        method: 'post',
        params
    });
}

//用户管理  批量导入用户
export function Administration_user_batchSave(params) {
    return request({
        url: '/admin/biz/fixed/userinfo/batchSave',
        method: 'post',
        params
    });
}

//车位状态  查询列表
export function Administration_stall_status_list(params) {
    return request({
        url: '/admin/biz/fixed/rent/stall_status_list',
        method: 'post',
        params
    });
}

//excel模板下载地址前缀
let excel_url = {
    excel: 'https://api.linkmoretech.cn', //线上
    //车位管理 批量导入授权
    batchSave: 'admin/biz/fixed/rent/batchSave',
    //用户管理   批量导入用户
    user_batchSave: '/admin/biz/fixed/userinfo/batchSave',
}
export default {
    excel_url: excel_url
}