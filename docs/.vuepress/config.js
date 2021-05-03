const path = require('path');

module.exports = {
  title: 'CSS 筆記',
  base: '/css-note/',
  // Extra tags to inject into the page HTML <head>
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  configureWebpack: {
    resolve: {
      alias: {
        '@image': path.resolve(__dirname, './images'),
        '@styles': path.resolve(__dirname, './styles'),
      },
    },
  },
  markdown: {
    // 代碼塊顯示行號
    lineNumbers: true,
  },
  themeConfig: {
    // 將同時提取 markdown 中 h2 和 h3 標題，顯示在側邊欄上
    // sidebarDepth: 1,
    // 文檔更新時間：每個文件 git 最後提交的時間
    lastUpdated: 'Last Updated',
    // 顯示所有頁面的標題鏈接
    // displayAllHeaders: true,
    // 導航欄配置
    nav: [
      // 內部鏈接 以 docs 為根目錄
      { text: 'GitHub', link: 'https://github.com/linche0859/css-note' }, // 外部鏈接
    ],
    // 側邊欄配置
    sidebar: [
      {
        title: 'RWD',
        // collapsable: true,
        children: [
          '/rwd/setting',
          '/rwd/basic-template',
          '/rwd/break-point-element',
          '/rwd/table',
          '/rwd/graph-design',
          '/rwd/responsive-image',
        ],
      },
      {
        title: 'SASS',
        path: '/scss/',
        children: [
          '/scss/mixin',
          '/scss/extend',
          '/scss/nth-index',
          '/scss/if',
          '/scss/for',
          '/scss/maps',
          '/scss/list',
        ],
      },
      {
        title: '切版直播班',
        children: ['layout/week3', 'layout/week4'],
      },
      {
        title: '屬性介紹',
        children: [
          'other/placeholder',
          'other/reflow',
          'other/rendering',
          'other/rendering-optimization',
          'other/variable',
          'other/specificity',
          'other/flex',
          'other/grid',
          'other/transition',
        ],
      },
    ],
  },
};
