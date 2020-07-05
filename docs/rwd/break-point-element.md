# 斷點規劃

解析度顯示的功能與 Layout 切換

## 常見的斷點

| 裝置 | 斷點                                                              |
| ---- | ----------------------------------------------------------------- |
| 桌機 | 1200px                                                            |
| 平板 | <ul><li>992px</li><li>768px</li></ul>                             |
| 手機 | <ul><li>767px</li><li>414px</li><li>375px</li><li>220px</li></ul> |

其中，如果以桌機往手機板製作，斷點設計可以如下：

```scss
h1 {
  font-size: 24px;
  // 992px 以下皆為平板
  @media (max-width: 992px) {
    font-size: 16px;
  }
  // 767px 以下皆為手機
  @media (max-width: 767px) {
    font-size: 14px;
  }
}
```

## 選單

- 桌面板(960px)
  - 選單為水平排列
  - 隱藏漢堡選單
- 行動版(768px)
  - 選單為垂直排列
  - 顯示漢堡選單

```css
/* 導覽選單 */
.navbar-menu > li {
  display: inline-block;
}
/* 漢堡按鈕 */
.button-toggle {
  display: none;
}

@media screen and (max-width: 768px) {
  .navbar-menu {
    display: none;
  }
  /* 透過 js 事件，加入 class，讓手機板的導覽選單顯示 */
  .navbar-menu.active {
    display: block;
  }
  .navbar-menu > li {
    display: block;
  }
  /* 顯示漢堡按鈕 */
  .button-toggle {
    display: inline-block;
  }
}
```
