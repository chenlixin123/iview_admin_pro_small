import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

const pre = 'Administration-';

export default {
    path: '/Administration',
    name: 'Administration',
    redirect: {
        name: `${pre}CarAdministration`
    },
    meta,
    component: BasicLayout,
    children: [{
            path: 'CarAdministration',
            name: `${pre}CarAdministration`,
            meta: {
                ...meta,
                title: '车位管理',
                closable: false
            },
            component: () => import('@/pages/Administration/CarAdministration')
        },
        {
            path: 'CarAdministration/CarAdministration_excel',
            name: `${pre}CarAdministration/CarAdministration_excel`,
            meta: {
                ...meta,
                title: '导入excel',
                closable: false
            },
            component: () => import('@/pages/Administration/CarAdministration/CarAdministration_excel')
        }, {
            path: 'CarAdministration/CarAdministrations',
            name: `${pre}CarAdministration/CarAdministrations`,
            meta: {
                ...meta,
                title: '车位详情',
                closable: false
            },
            component: () => import('@/pages/Administration/CarAdministration/CarAdministrations')
        },
        {
            path: 'CarAdministration/CarAdministration_edit',
            name: `${pre}CarAdministration/CarAdministration_edit`,
            meta: {
                ...meta,
                title: '编辑信息',
                closable: false
            },
            component: () => import('@/pages/Administration/CarAdministration/CarAdministration_edit')
        },
        {
            path: 'UserAdministration',
            name: `${pre}UserAdministration`,
            meta: {
                ...meta,
                title: '用户管理',
                closable: false
            },
            component: () => import('@/pages/Administration/UserAdministration')
        },
        {
            path: 'UserAdministration/UserAdministration_excel',
            name: `${pre}UserAdministration/UserAdministration_excel`,
            meta: {
                ...meta,
                title: '用户批量导入',
                closable: false
            },
            component: () => import('@/pages/Administration/UserAdministration/UserAdministration_excel')
        },
        {
            path: 'Carstatus',
            name: `${pre}Carstatus`,
            meta: {
                ...meta,
                title: '车位状态',
                closable: false
            },
            component: () => import('@/pages/Administration/Carstatus')
        }
    ]
};