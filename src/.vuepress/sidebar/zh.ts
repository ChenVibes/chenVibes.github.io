import { sidebar } from 'vuepress-theme-hope';

export const zhSidebar = sidebar({
  // '/杂七杂八/': 'structure',
  '/开发日志/': 'structure',
  '/数据结构算法/': 'structure',
  '/前端开发/': 'structure',
  '/基础知识/': 'structure',
  '/后端开发/': 'structure',
  '/about/': [
    {
      text: '关于',
      icon: 'info',
      prefix: '',
      link: '/about/',
      children: 'structure',
    },
  ],
  '/favorite/': [
    {
      text: '影视',
      icon: 'movie',
      prefix: 'movies/',
      link: '/favorite/movies/',
      children: 'structure',
    },
    {
      text: '音乐',
      icon: 'music',
      prefix: 'music/',
      children: 'structure',
      link: '/favorite/music/',
    },
    {
      text: '相册',
      icon: 'xiangce',
      prefix: 'photos/',
      children: 'structure',
      link: '/favorite/photos/',
    },
    {
      text: '链接',
      icon: 'link',
      prefix: 'links/',
      children: 'structure',
      link: '/favorite/links/',
    },
  ],
});
