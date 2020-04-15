# 斷點元素

> 解析度顯示的功能與 Layout 切換

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
