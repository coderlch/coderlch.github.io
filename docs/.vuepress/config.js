const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')


module.exports = {
  lang: 'zh-CN',
  title: 'coderlch',
  description: 'coderlch`s blog',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }]
  ],
  
  
  
  // 默认主题配置
  theme: defaultTheme({
    lastUpdated: true,
    // logo图标
    logo: '/images/header.jpeg',
    // 首页的路径
    home: '/',
    // 侧边栏标题深度
    sidebarDepth: 3,
    // sidebar
    sidebar: 'SidebarConfigObject',
    // 导航栏
    navbar: [
      // Java后端
      {
        text: 'Java后端',
        children: [
          { text: 'JavaSE', link: '' },
          { text: 'JavaWeb', link: '' },
          { text: 'MyBatis', link: '' },
          { text: 'Spring', link: '' },
          { text: 'Spring MVC', link: '' },
          { text: 'Spring Boot', link: '' },
          { text: 'Spring Cloud', link: '/java/springcloud/' },
          
        ]
      },

      // 前端
      {
        text: 'Web前端',
        children: [

        ]
      },

      // 操作系统
      {
        text: '操作系统',
        children: [

        ]
      },

      // 数据库
      {
        text: '数据库',
        children: [

        ]
      },

      // 计算机网络
      {
        text: '计算机网络',
        children: [

        ]
      },

      // 算法
      {
        text: '算法',
        children: [

        ]
      },

      // 数据结构
      {
        text: '数据结构',
        children: [

        ]
      },

      // 工具
      {
        text: '工具',
        children: [
          {text: 'Linux', link: '/linux/'}
        ]
      },

      // Home
      {
        text: 'Home',
        link: '/'
      }
    ],
    // 侧边栏配置
    sidebar: {
      '/java/springcloud/': [
        {
          text: 'Spring Cloud',
          collapsible: true,
          children: [
            'springcloud-01.md',
            'SpringCloud-02.md',
            'Docker实用篇.md',
            'nacos集群搭建.md',
            'Centos7安装Docker.md'
          ]
        }
      ],
      '/linux/': [
        {
          text: 'Linux',
          collapsible: true,
          children: [
            'Linux常用命令.md'
          ]
        }
      ]
    }
  }),

  // 插件配置
  plugins: [
    // 搜索插件
    searchPlugin({
      // 指定搜索结果的最大条数
      maxSuggestions: 15,
      locales: {
        '/': {
          placeholder: 'Search',
        }
      }
      
    }),
  ],
  
}