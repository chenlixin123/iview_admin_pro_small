import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

const pre = 'business-';

export default {
    path: '/business',
    name: 'business',
    redirect: {
        name: `${pre}console`
    },
    meta,
    component: BasicLayout,
    children: [{
            path: 'console',
            name: `${pre}console`,
            meta: {
                ...meta,
                title: '控制台',
                closable: false
            },
            component: () => import('@/pages/business/console')
        },
        {
            path: 'monitor',
            name: `${pre}monitor`,
            meta: {
                ...meta,
                title: '实时监控',
                closable: false
            },
            component: () => import('@/pages/business/monitor')
        },
        {
            path: 'overview_echarts',
            name: `${pre}overview_echarts`,
            meta: {
                ...meta,
                title: '车场概览',
                closable: false
            },
            component: () => import('@/pages/business/overview_echarts')
        }
    ]
};