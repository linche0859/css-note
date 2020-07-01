# 基礎用法

## 變數

### 變數取用

變數可以用 `#{}` 取出，並用於 class 定義上，如：

```scss
$bg: '../images/';
$icon-style: blue;

.header {
  background: url(#{$bg}header.png);
}

.icon-#{$icon-style} {
  color: $icon-style;
}

// .header {
//   background: url(../images/header.png);
// }

// .icon-blue {
//   color: blue;
// }
```

### 運用計算

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

```scss
$width: 500px;
$fontSize: 100%;
$bigFontSize: $fontSize * 1.2;
$smallFontSize: $fontSize * 0.8;

ul {
  width: $width;
}

li {
  // 因應 html 結構數量，自動分配寬度
  width: $width / 3;
  font-size: $bigFontSize;
}
```
