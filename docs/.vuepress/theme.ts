import { hopeTheme } from 'vuepress-theme-hope'
import Navbar from './bar/Navbar'
import Sidebar from './bar/Sidebar'
export default hopeTheme({
  hostname: 'https://zfhblog.top',
  contributors: false,
  editLink: false,
  author: {
    name: 'Mr.Chen',
    url: '/logo.png'
  },
  repoDisplay: false,
  iconAssets: '//at.alicdn.com/t/c/font_4328948_neuaqkpxag.css',
  logo: '/logo.png',
  footer: '',
  copyright: 'Copyright © 2018-present Mr.Chen',
  pageInfo: [
    'Author',
    'Original',
    'Date',
    'Category',
    'Tag',
    'ReadingTime',
    'Word',
    'PageView'
  ],
  navbar: Navbar,
  sidebar: Sidebar,
  sidebarSorter: ['date-desc'],
  displayFooter: true,
  breadcrumb: true,
  blog: {
    roundAvatar: true,
    avatar: '/logo.png',
    description: `前端攻城狮,目前在上海工作。<br>
    <hr>
    ✍️自2018年1月1日写了:<br>
    <a href='https://wakatime.com/@b94342d7-a3b1-41c3-8455-342d836a7152'><img src='https://wakatime.com/badge/user/b94342d7-a3b1-41c3-8455-342d836a7152.svg'>的代码</a><br>
    <hr>
    💻开发工具:<br>
    <img src='https://img.shields.io/badge/-MacBookPro,2020,M1-000?style=flat-square&logo=Apple&logoColor=white'/>
    <img src='https://img.shields.io/badge/-WebStorm-000?style=flat-square&logo=WebStorm&logoColor=white'/>
    <img src='https://img.shields.io/badge/-Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white'/>
    <br>
    <hr>
    👌正在使用:<br>
    <img src='https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white'/>
    <img src='https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white'/>
    <img src='https://img.shields.io/badge/-Vue-4FC08D?style=flat-square&logo=Vue.js&logoColor=white'/>
    <img src='https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=white'/>
    <br>
    <hr>
    💪正在学习:<br>
    <img src='https://img.shields.io/badge/-Three.js-000?style=flat-square&logo=Three.js&logoColor=white'/>
    <img src='https://img.shields.io/badge/-Next.js-000?style=flat-square&logo=Next.js&logoColor=white'/>
    <img src='https://img.shields.io/badge/-NestJS-E0234E?style=flat-square&logo=NestJS&logoColor=white'/>
    <img src='https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white'/>
    <img src='https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=Docker&logoColor=white'/>
    <img src='https://img.shields.io/badge/-Redis-DC382D?style=flat-square&logo=Redis&logoColor=white'/>
    <hr>
    `,
    medias: {
      Email: 'mailto:599422271@qq.com',
      Github: 'https://github.com/frontchen',
      Gitee: 'https://gitee.com/magicBegin'
    }
  },
  encrypt: {
    config: {}
  },
  plugins: {
    blog: {
      excerpt: false
    },
    comment: {
      dark: 'auto',
      provider: 'Waline',
      serverURL: 'https://waline.zfhblog.top'
    },
    components: {
      components: ['Badge', 'CodePen', 'PDF']
    },
    mdEnhance: {
      // 启用流程图
      flowchart: true,
      codetabs: true,
      container: true,
      demo: true,
      imgSize: true,
      figure: true,
      mark: true,
      tabs: true,
      tasklist: true
    }
  }
})
