module.exports = {
    title: '苍羽凌霄', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '个人测试页面，如有侵权请告知undefinded007@163.com', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', {rel: 'icon', href: '/timg.jpg'}],  //浏览器的标签栏的网页图标
    ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    themeConfig: {
        logo: '/timg.jpg',
        lastUpdated: 'lastUpdate', // string | boolean
        nav: [
            {text: '首页', link: '/'},
            {
                text: '美女主播',
                ariaLabel: '分类',
                items: [
                    {text: '苏恩', link: '/pages/folder1/test1.md'},
                    {text: '米儿', link: '/pages/folder2/test4.md'},
                ]
            },
            {text: 'Coding', link: 'https://dev.tencent.com/u/cangyu1993'},
            {text: 'Github', link: 'https://github.com/cangyu1993'},
        ],
        sidebar: {
            '/pages/folder1/': [
                {
                    title: '美女主播',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['test1.md', '苏恩'],
                        ['test3.md', '米儿']
                    ]
                }
            ],
        }
    }
}
