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
