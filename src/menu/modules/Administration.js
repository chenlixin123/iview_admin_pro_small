const pre = '/Administration/';

export default {
    path: '/Administration',
    title: '管理',
    header: 'home',
    icon: 'ios-folder',
    children: [{
            path: `${pre}CarAdministration`,
            title: '车位管理'
        },
        {
            path: `${pre}CarAdministration/CarAdministration_excel`,
            title: '导入excel',
            auth: ['hidden'] // 不存在的鉴权，所以不会显示该菜单
        },
        {
            path: `${pre}CarAdministration/CarAdministrations`,
            title: '列表详情',
            auth: ['hidden'] // 不存在的鉴权，所以不会显示该菜单
        },
        {
            path: `${pre}CarAdministration/CarAdministration_edit`,
            title: '编辑信息',
            auth: ['hidden'] // 不存在的鉴权，所以不会显示该菜单
        },
        {
            path: `${pre}UserAdministration`,
            title: '用户管理'
        },
        {
            path: `${pre}UserAdministration/UserAdministration_excel`,
            title: '用户批量导入',
            auth: ['hidden'] // 不存在的鉴权，所以不会显示该菜单
        },
        {
            path: `${pre}Carstatus`,
            title: '车位状态',
        }
    ]

}