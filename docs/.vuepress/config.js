const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
// import { searchPlugin } from '@vuepress/plugin-search'


module.exports = {
  lang: 'zh-CN',
  title: 'coderlch',
  description: 'coderlch`s blog',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/images/favion.ico' }]
  ],
  
  
  
  // 默认主题配置
  theme: defaultTheme({
    lastUpdated: true,
    // logo图标
    logo: '/images/header.jpeg',
    // 首页的路径
    home: '/',
    // 侧边栏标题深度
    sidebarDepth: 6,
    // sidebar
    sidebar: 'SidebarConfigObject',
    // 导航栏
    navbar: [
      // Java后端
      {
        text: 'Java后端',
        children: [
          { text: 'JavaSE', link: '/java/javaSE/' },
          { text: 'JavaWeb', link: '/java/javaweb/' },
          { text: 'Spring', link: '/java/spring/' },
          { text: 'Spring MVC', link: '' },
          { text: 'Spring Boot', link: '' },
          { text: 'MyBatis', link: '' },
          { text: 'Spring Cloud', link: '/java/springcloud/' },
          {text: 'JVM', link: '/java/JVM/'}
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
          { text: 'Linux', link: '/linux/' },
          {text: 'Docker', link: '/docker/'}
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
      '/java/javaSE/': [
        {
          text: 'Java语言基础',
          collapsible: true,
          children: [
            'Java语言基础'
          ]
        },
        {
          text: '集合',
          collapsible: true,
          children: [
            'HashMap',
            'ArrayList',
            'LinkedList'
          ]
        },
        {
          text: 'IO流',
          collapsible: true,
          children: [
            'IO流'
          ]
        },
        {
          text: '网络编程',
          collapsible: true,
          children: [
            '网络编程'
          ]
        },
        {
          text: 'Java并发基础',
          collapsible: true,
          children: [
            'Java并发基础'
          ]
        },
        {
          text: '反射',
          collapsible: true,
          children: [
            '反射'
          ]
        },
        {
          text: 'JavaAPI',
          collapsible: true,
          children: [
            '字符串',
            'Arrays'
          ]
        }
      ],


      '/java/javaweb/': [
        {
          text: 'Tomcat&Servlet',
          collapsible: true,
          children: [
            'TomcatServlet'
          ]
        }
      ],


      '/java/spring/': [
        {
          text: 'Spring',
          collapsible: true,
          children: [
            'spring高级.md'
          ]
        }
       

      ],


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


      '/java/JVM/': [
        {
          text: '类加载器',
          collapsible: true,
          children: [
            '类加载器'
          ]
        },
        {
          text: 'JVM',
          collapsible: true,
          children: [
            'JVM'
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
      ],


      '/docker/': [
        {
          text: 'Docker',
          collapsible: true,
          children: [
            'Docker实用篇.md'
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