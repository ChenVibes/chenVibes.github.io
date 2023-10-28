import { hopeTheme } from 'vuepress-theme-hope';
import { zhNavbar } from './navbar/index.js';
import { zhSidebar } from './sidebar/index.js';

const footerICP_HTML = `
<a class="footer-icp" href="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank">
  <img src="/favicon.ico">
  豫ICP备19040343号-1
</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="footer-about" href="/about/website.html">关于本站</a>`;

export default hopeTheme({
  hostname: 'http://magicbegin.gitee.io/vuepress-blog',
  author: {
    name: 'Mr Chen',
    url: 'https://gitee.com/magicBegin/vuepress-blog',
    email: '599422271@qq.com',
  },
  iconAssets: '//at.alicdn.com/t/c/font_3677319_oahe2s4vqga.css',
  logo: '/favicon.png',
  docsDir: 'src',
  editLink: false,
  fullscreen: true,
  navbarAutoHide: 'always',
  footer: footerICP_HTML,
  pageInfo: [
    'Author',
    'Category',
    'Date',
    'Original',
    'Tag',
    'ReadingTime',
    'Word',
    'PageView',
    //..
  ],

  blog: {
    avatar: '/favicon.png',
    roundAvatar: true,
    name: 'Mr.Chen',
    timeline: '美好的事情即将发生',
    description: `一个专注于编程开发技术的个人知识库博客。<br>
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
      Gitee: 'https://gitee.com/magicBegin',
      // Lark: 'https://www.feishu.cn/invitation/page/add_contact/?token=417h7852-934c-4f08-9112-00d257d0cdae&amp;unique_id=FnKsnwD3MN8t7zjWer4tqQ==',
      // Zhihu: 'https://www.zhihu.com/people/meichangliang',
    },
  },

  navbarLayout: {
    start: ['Brand'],
    center: [],
    end: ['Search', 'Links', 'Language', 'Outlook'],
  },

  navbar: zhNavbar,
  sidebar: zhSidebar,

  plugins: {
    blog: true,

    comment: {
      provider: 'Waline',
      serverURL: 'https://talk.mo7.cc',
      copyright: false,
      reaction: true,
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ['ts', 'vue'],
      },
      presentation: ['highlight', 'math', 'search', 'notes', 'zoom'],
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: '/favicon.png',
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: '/favicon.png',
        statusBarColor: 'black',
      },
      msTile: {
        image: '/favicon.png',
        color: '#000',
      },
      manifest: {
        icons: [
          {
            src: '/favicon.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/favicon.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/favicon.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/favicon.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        shortcuts: [
          {
            name: 'Mr.Chen',
            short_name: 'Mr.Chen',
            url: '/',
            icons: [
              {
                src: '/favicon.png',
                sizes: '192x192',
                purpose: 'maskable',
                type: 'image/png',
              },
            ],
          },
        ],
      },
    },
  },
});
