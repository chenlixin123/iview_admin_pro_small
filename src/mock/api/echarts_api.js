// 车位使用情况
export default [{
        path: '/api/usage_text',
        method: 'post',
        handle({
            body
        }) {
            return {
                code: 0,
                msg: '查询成功',
                data: {
                    usage: {
                        last_week_total: '108',
                        last_week_use_times: '339',
                        last_week_proportion: '73%',
                        average_usage_number: '43',
                        average_usage_times: '48',
                        weekly_average_number: '3.1'
                    }
                }
            }
        }
    }, {
        path: '/api/usage_pie',
        method: 'post',
        handle({
            body
        }) {
            return {
                code: 0,
                msg: '查询成功',
                data: {
                    usage_pie: [{
                        value: 310,
                        name: "未激活车位"
                    }, {
                        value: 635,
                        name: "使用车位"
                    }, {
                        value: 246,
                        name: "未使用车位"
                    }, ]
                }
            }
        }
    }, {
        path: '/api/usage_line',
        method: 'post',
        handle({
            body
        }) {
            return {
                code: 0,
                msg: '查询成功',
                data: {
                    usage_line_name: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
                    usage_line_use: [120, 132, 101, 134, 90, 230, 210],
                    usage_line_notused: [220, 182, 191, 234, 290, 330, 310],
                    usage_line_number: [30, 100, 80, 150, 180, 100, 170]
                }
            }
        }
    },
    //车位活跃天数
    {
        path: '/api/active_text',
        method: 'post',
        handle({
            body
        }) {
            return {
                code: 0,
                msg: '查询成功',
                data: {
                    active: {
                        threeday: '54%',
                        fiveday: '14%',
                        car: 'A623'
                    }
                }
            }
        }
    }, {
        path: '/api/active_pie',
        method: 'post',
        handle({
            body
        }) {
            return {
                code: 0,
                msg: '查询成功',
                data: {
                    active_pie: [{
                        value: 900,
                        name: "1天"
                    }, {
                        value: 510,
                        name: "2天"
                    }, {
                        value: 765,
                        name: "3天"
                    }, {
                        value: 646,
                        name: "4天"
                    }, {
                        value: 310,
                        name: "5天"
                    }, {
                        value: 335,
                        name: "6天"
                    }, {
                        value: 135,
                        name: "7天"
                    }]
                }
            }
        }
    }, {
        path: '/api/active_line',
        method: 'post',
        handle({
            body
        }) {
            return {
                code: 0,
                msg: '查询成功',
                data: {
                    active_line_name: [
                        "A623",
                        "A676",
                        "A613",
                        "A854",
                        "A602",
                        "A636",
                        "A708",
                        "A749",
                        "A910",
                        "A603",
                        "A668",
                        "A720",
                        "A825",
                        "A836",
                        "A850",
                        "A869",
                        "A915",
                        "A936",
                        "A947",
                        "A963",
                        "A974",
                        "A988",
                        "A805",
                        "A809",
                        "A869",
                    ],
                    active_line_data: [
                        120,
                        132,
                        101,
                        134,
                        90,
                        230,
                        210,
                        254,
                        156,
                        511,
                        123,
                        412,
                        123,
                        265,
                        146,
                        154,
                        154,
                        256,
                        124,
                        156,
                        145,
                        125,
                        265,
                        125,
                        458,
                    ],
                }
            }
        }
    },
    //车位时间利用率
    {
        path: '/api/utilize_text',
        method: 'post',
        handle({
            body
        }) {
            return {
                code: 0,
                msg: '查询成功',
                data: {
                    utilize: {
                        utilize_first: '53%',
                        utilize_second: '50%',
                        utilize_hour: '19小时',
                        utilize_car: '20%',
                        utilize_insufficient: '19%'
                    }
                }
            }
        }
    }, {
        path: '/api/utilize_line',
        method: 'post',
        handle({
            body
        }) {
            return {
                code: 0,
                msg: '查询成功',
                data: {
                    utilize_line_name: ["≤10%", "10-30%", "30-50%", "50-80%", ">80%"],
                    utilize_line_data: [120, 132, 101, 134, 90],
                }
            }
        }
    },
    //车位使用时长
    {
        path: '/api/parking_text',
        method: 'post',
        handle({
            body
        }) {
            return {
                code: 0,
                msg: '查询成功',
                data: {
                    parking: {
                        parking_total_hours: '847.2',
                        parking_focus: '12-48小时',
                        parking_total_share: '62%',
                        parking_single: '34.9',
                        parking_Longest: '6.7',
                        parking_car: 'A715'
                    }
                }
            }
        }
    }, {
        path: '/api/parking_number_line',
        method: 'post',
        handle({
            body
        }) {
            return {
                code: 0,
                msg: '查询成功',
                data: {
                    parking_number_line_name: [
                        "2小时内",
                        "2-4小时",
                        "4-6小时",
                        "6-8小时",
                        "8-12小时",
                        "12-24小时",
                        "24-48小时",
                        "48-72小时",
                        ">72小时",
                        "未知",
                    ],
                    parking_number_line_data: [120, 132, 101, 134, 90, 168, 425, 245, 125, 423],
                }
            }
        }
    }, {
        path: '/api/parking_frequency_line',
        method: 'post',
        handle({
            body
        }) {
            return {
                code: 0,
                msg: '查询成功',
                data: {
                    parking_frequency_name: [
                        "2小时内",
                        "2-4小时",
                        "4-6小时",
                        "6-8小时",
                        "8-12小时",
                        "12-24小时",
                        "24-48小时",
                        "48-72小时",
                        ">72小时",
                        "未知",
                    ],
                    parking_frequency_data: [120, 132, 101, 134, 90, 168, 425, 245, 125, 423]
                }
            }
        }
    }
]