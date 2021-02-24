const pre = '/Journal/';

export default {
    path: '/Journal',
    title: '日志',
    header: 'home',
    icon: 'md-document',
    children: [{
            path: `${pre}Car_journal`,
            title: '车位日志'
        },
        {
            path: `${pre}system_journal`,
            title: '系统日志',
        },
    ]

}