import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

const pre = 'Statistics-';

export default {
    path: '/Statistics',
    name: 'Statistics',
    redirect: {
        name: `${pre}CarStatistics`
    },
    meta,
    component: BasicLayout,
    children: [{
            path: 'CarStatistics',
            name: `${pre}CarStatistics`,
            meta: {
                ...meta,
                title: '车场分析',
                closable: false
            },
            component: () => import('@/pages/Statistics/CarStatistics')
        }
    ]
};