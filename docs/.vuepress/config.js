import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'toolspad',
  base:'./',
  description: '轻量高效、简易易用，集数据处理、字符串操作等多功能于一体的实用函数库。',
  head: [
    ['link', { rel: 'icon', href: './images/my-tools-logo.png' }]
  ],
  theme: defaultTheme({
    logo: './images/my-tools-logo.png',
    navbar: ['/', '/get-started'],
  }),
  
  bundler: viteBundler(),
})
