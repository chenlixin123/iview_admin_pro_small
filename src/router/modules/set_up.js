import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

const pre = 'set_up';

export default {
    path: '/set_up',
    name: 'set_up',
    redirect: {
        name: `${pre}system_set_up`
    },
    meta,
    component: BasicLayout,
    children: [{
        path: 'system_set_up',
        name: `${pre}system_set_up`,
        meta: {
            ...meta,
            title: '系统设置',
            closable: false
        },
        component: () => import('@/pages/set_up/system_set_up')
    }, ]
};