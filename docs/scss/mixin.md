# mixin

1. 和繼承功能一樣，屬於被繼承的樣式
1. 被繼承幾次，就會產生幾份
1. 大部分都把變數和 function，在其中一起實作

## 基本用法

```scss
@mixin clearfix {
  &::before,
  &::after {
    content: '';
    display: table;
  }
  &::after {
    clear: both;
  }
}

@mixin hide-text {
  text-indent: 110%;
  white-space: nowrap;
  overflow: hidden;
}

h1 {
  @include hide-text;
}

.box {
  @include clearfix;
}
```

產生結果

```css
h1 {
  text-indent: 110%;
  white-space: nowrap;
  overflow: hidden;
}

.box::before,
.box::after {
  content: '';
  display: table;
}

.box::after {
  clear: both;
}
```

## 加入變數

```scss
@mixin circle($size, $bgColor) {
  border-radius: 50%;
  width: $size;
  height: $size;
  font-size: $size / 3;
  background-color: $bgColor;
}

.red-circle {
  @include circle(30px, #f00);
}
```

產生結果

```css
.red-circle {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 10px;
  background-color: #f00;
}
```

## @content

`@content` 的用途主要是拿來傳遞內容到 `Mixin` 裡面去的，類似於 vue 的 `slot` 作法

```scss
@mixin bg($text-color, $bg-color) {
  background: $bg-color;
  color: $text-color;
  @content;
}

.bg {
  @include bg(#fff, #000) {
    border: 1px solid;
  }
}
```

產生結果

```css
.bg {
  background: #000;
  color: #fff;
  border: 1px solid;
}
```

### 選擇器的繼承與覆蓋

常用於針對特定瀏覽器去做兼容性的語法

```scss
@mixin ie8 {
  .ie8 & {
    @content;
  }
}

.box {
  width: 50px;
  @include ie8 {
    width: 150px;
  }
}
```

產生結果

```css
.box {
  width: 50px;
}

.ie8 .box {
  width: 150px;
}
```

### 狀態

可以針對如 `a` 標籤的狀態管理

```scss
@mixin link {
  //連結樣式
  &:link,
  &:visited {
    @content;
  }
}
@mixin link-hover {
  //被點擊後的樣式
  &:hover,
  &:focus,
  &:active,
  &.active {
    @content;
  }
}
.box {
  height: 50px;
  @include link {
    color: #fff;
  }
  @include link-hover {
    color: #000;
  }
}
```

產生結果

```css
.box {
  height: 50px;
}
.box:link,
.box:visited {
  color: #fff;
}
.box:hover,
.box:focus,
.box:active {
  color: #000;
}
```

### @content 也可以寫二個以上

例如時常在寫的瀏覽器兼容前綴詞

```scss
@mixin keyframes($animation) {
  @-webkit-keyframes #{$animation} {
    @content;
  }
  @-moz-keyframes #{$animation} {
    @content;
  }
  @-ms-keyframes #{$animation} {
    @content;
  }
  @-o-keyframes #{$animation} {
    @content;
  }
  @keyframes #{$animation} {
    @content;
  }
}

@include keyframes(mymove) {
  0% {
    top: 0px;
  }
  100% {
    top: 200px;
  }
}

div {
  width: 100px;
  height: 100px;
  background: red;
  position: relative;
  animation: mymove 5s infinite;
}
```

### RWD 斷點設計

```scss
//透過斷點變數統一管理
$pc: 1024px;
$mobile: 767px;
@mixin rwd($width) {
  @media only screen and (max-width: $width) {
    @content;
  }
}
.box {
  float: left;
  width: 30%;
  @include rwd($mobile) {
    float: none;
    width: 100%;
  }
}
```

產生結果

```css
.box {
  float: left;
  width: 30%;
}
@media only screen and (max-width: 767px) {
  .box {
    float: none;
    width: 100%;
  }
}
```

## 參考

[Sass 教學 (11) - @content](https://ithelp.ithome.com.tw/articles/10156850)
