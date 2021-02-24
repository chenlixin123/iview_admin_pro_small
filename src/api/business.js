import request from '@/plugins/request';
// 车场概览、车位使用率、车流量数据
export function business_biz_prefecture_analysis(params) {
    return request({
        url: '/admin/biz/prefecture/analysis',
        method: 'get',
        params
    });
}

// 停车时长分布
export function business_biz_prefecture_history_datav_list(params) {
    return request({
        url: '/admin/biz/prefecture/history/datav/list',
        method: 'get',
        params
    });
}

// 车位利用率
export function business_biz_prefecture_stall_rate(params) {
    return request({
        url: '/admin/biz/prefecture/stall-rate',
        method: 'get',
        params
    });
}

// 车位周转率
export function business_biz_prefecture_turnover_rate(params) {
    return request({
        url: '/admin/biz/prefecture/turnover-rate',
        method: 'get',
        params
    });
}

// 平均停车时长
export function business_biz_prefecture_average_parking_time(params) {
    return request({
        url: '/admin/biz/prefecture/average-parking-time',
        method: 'get',
        params
    });
}

// 出入口车流量
export function business_biz_prefecture_inout_record(params) {
    return request({
        url: '/admin/biz/prefecture/inout-record',
        method: 'get',
        params
    });
}


//出入口下拉框列表
export function Administration_admin_park_floor_list(params) {
    return request({
        url: '/admin/biz/park/floor/om/list',
        method: 'post',
        params
    });
}



//整体车流量
export function Administration_admin_biz_prefecture_flow(params) {
    return request({
        url: '/admin/biz/prefecture/inout-flow',
        method: 'get',
        params
    });
}