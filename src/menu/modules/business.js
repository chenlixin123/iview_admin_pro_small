const pre = '/business/';

export default {
    path: '/business',
    title: '商业智能',
    header: 'home',
    icon: 'md-pie',
    auth: ['echarts'],
    children: [{
            path: `${pre}console`,
            title: '控制台'
        },
        {
            path: `${pre}monitor`,
            title: '实时监控',
        },{
        path: `${pre}overview_echarts`,
        title: '车场概览'
    }
    ]

}