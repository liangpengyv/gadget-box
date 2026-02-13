import { defineConfig } from 'vitepress'
import markdownItTaskCheckbox from 'markdown-it-task-checkbox'
import { COMPONENTS_PATH } from './constants/path'

export default defineConfig({
  lang: 'zh-Hans',
  title: 'Gadget Box',
  description: '一个 Vue3 组件库',
  cleanUrls: true,
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]],

  vite: {
    server: {
      host: true,
      port: 9501,
    },
    plugins: [
      {
        name: 'custom-file-watcher',
        configureServer: (server) => {
          server.watcher.add(COMPONENTS_PATH)
        },
      },
    ],
  },

  markdown: {
    config: (md) => {
      md.use(markdownItTaskCheckbox)
    },
  },

  themeConfig: {
    logo: '/favicon.svg',
    socialLinks: [{ icon: 'github', link: 'https://github.com/liangpengyv/gadget-box' }],

    footer: {
      copyright: `版权所有 © 2024 - ${new Date().getFullYear()} By <a href="https://www.laoliang.ink/about/" target="_blank">老梁</a>`,
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    nav: [
      { text: '指南', activeMatch: '/guide/', link: '/guide/introduction' },
      { text: '组件', activeMatch: '/components/', link: '/components/overview' },
    ],

    sidebar: {
      '/guide/': {
        base: '/guide/',
        items: [
          {
            text: '基础',
            items: [
              { text: '简介', link: 'introduction' },
              { text: '快速开始', link: 'getting-started' },
            ],
          },
          {
            text: '开发',
            items: [
              { text: '开发指南', link: 'develop-guide' },
              { text: 'Packages', link: 'develop-packages' },
              { text: '编辑文档', link: 'develop-docs' },
              { text: '贡献', link: 'contribution' },
              { text: '发布', link: 'publish' },
            ],
          },
          {
            text: '其它',
            items: [
              { text: 'FAQ', link: 'faq' },
              { text: '反馈', link: 'feedback' },
              { text: '变更日志', link: 'changelog' },
              { text: '✅ TODO', link: 'todo' },
            ],
          },
        ],
      },
      '/components/': {
        base: '/components/',
        items: [
          {
            text: '概览',
            items: [{ text: '组件概览', link: 'overview' }],
          },
          {
            text: '基础组件',
            items: [{ text: 'TestCard', link: 'test-card' }],
          },
        ],
      },
    },
  },
})
