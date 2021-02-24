import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

const pre = 'Journal-';

export default {
    path: '/Journal',
    name: 'Journal',
    redirect: {
        name: `${pre}Car_journal`
    },
    meta,
    component: BasicLayout,
    children: [{
            path: 'Car_journal',
            name: `${pre}Car_journal`,
            meta: {
                ...meta,
                title: '车位日志',
                closable: false
            },
            component: () => import('@/pages/Journal/Car_journal')
        },
        {
            path: 'System_journal',
            name: `${pre}system_journal`,
            meta: {
                ...meta,
                title: '系统日志',
                closable: false
            },
            component: () => import('@/pages/Journal/system_journal')
        }
    ]
};