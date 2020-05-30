# Map

## 結構

使用 key/value 方式記錄

```scss
$map: (
  key: value,
  key2: value2,
  key3: value3,
);
```

:::warning 注意

1. 最後一個 key/value 後面的逗號可以省略
1. key 的名稱**不能重複**，否則會編譯錯誤
1. key/value 的名稱可以是許多資料類型(數字、字串、布林等等)

:::

基本使用

```scss
$color: (
  default: #fff,
  primary: #22ae39,
);
.box {
  color: map-get($color, default);
  background: map-get($color, primary);
}
```

## Map 方法

1. `map-get($map,$key)`：取出 `$map` 裡指定的`$key`，將 `value` 取出來。
1. `map-merge($map1,$map2)`：將兩個 `$map` 合併起來。
1. `map-remove($map,$key)`：從 `$map` 裡面刪除一個 `$key`。
1. `map-keys($map)`：取出所有的 `$key`。
1. `map-values($map)`：取出所有的 `value`
1. `map-has-key($map,$key)`：瀏覽裡面是否有`$key` 值，有則回傳 `true`，沒有便回傳 `false`。

## @each + Map

透過這樣，往後可以把 Map 移動到 `variable.scss` 做統一管理，
要新增一組按鈕樣式時，只要增加 Map 的一組 key/value 即可。

```scss
$types: (
  defaule: #333,
  primary: #428bca,
) !default;
//按鈕
@each $name, $color in $types {
  .btn-#{$name} {
    background: $color;
    color: #fff;
    border: 1px solid darken($color, 5%);
  }
}
```

## z-index 管理

首先新增一個 z-index.scss

```scss
$zindex: (
  modal: 9000,
  overlay: 8000,
  dropdown: 7000,
  header: 6000,
  footer: 5000,
);

.header {
  z-index: map-get($zindex, header);
}
```

往後只要有用到 `z-index` 的元素就曉得該拿這檔案瀏覽，以往設計 `Sass` 結構時，都會認為變數在一個 `SCSS` 檔應該統一管理，但這樣的話你要管理 `z-index` 時，就必須要：

1. 一個新區塊要設定 `z-index`
1. 到變數的 `scss` 檔看一下設定值
1. 再開啟要新增區塊的 `scss` 新增 `z-index`

### 差異性

前者的方式都可在一個 `z-index` 檔上直接做完，相對來說也省事多了。

### 使用 function 設計

將 `$zIndexs` 包裝起來，並且如果傳入的參數並不存在於 `$zIndexs` 當中就會直接打斷編譯過程，並且顯示錯誤，也提供了相關的錯誤訊息給開發者參考。

```scss
$zIndexs: (
  'dropdown-backdrop',
  'navbar',
  'normal',
  'dropdown',
  'fixed',
  'sticky',
  'modal-backdrop',
  'modal',
  'popover',
  'tooltip'
);

​@function zindex($name: normal) {
  $index: index($zIndexs, $name);
  if (!$index) {
    @error "#{$name} doesn't exist! please checkout your `$zIndexs` variable.";
  }

  @return $index;
}
​ .dropdown {
  z-index: zindex('dropdown');
}
​ .dropdown-backdrop {
  z-index: zindex('dropdown-backdrop');
}
.tooltip {
  z-index: zindex('tooltip');
}
```

## 提升可讀性

以設計 font icon 為例，透過 Map 和 `@each` 的設計

```scss
$icons: (
  skull: '\e18c',
  warning: '\e243',
  checkmark: '\e258',
  instagram: '\e32e',
  twitter: '\e32f',
  dribbble: '\e341',
  github: '\e34c',
  soundcloud: '\e35d',
  stackoverflow: '\e367',
);
[data-icon]:before {
  @extend %icon; // icon預設樣式
  content: attr(data-icon);
}

@each $name, $glyph in $icons {
  [data-icon='#{$icon}']:before {
    content: map-get($icons, $name);
  }
}
```

往後要瀏覽有哪些樣式時，只要看 Map 來瀏覽，便不用滾輪滾上滾下花時間來找，相對來說可讀性就高許多了。

## 斷點設計

### 管理字體大小

```scss
$fontSizes: (
  desktop: (
    'x-large': 32px,
    'large': 30px,
    'medium': 26px,
    'normal': 18px,
    'small': 14px,
    'x-small': 12px
  ),
  mobile: (
    'x-large': 28px,
    'large': 24px,
    'medium': 20px,
    'normal': 16px,
    'small': 12px,
    'x-small': 10px
  )
);
​
@mixin font-size(size: "normal") {
  @media screen and (min-width: 768px) {
    $desktop: map-get($fontSizes, desktop);
    font-size: map-get($desktop, size);
  }

  @media screen and (max-width: 767px) {
    $mobile: map-get($fontSizes, mobile);
    font-size: map-get($mobile, size);
  }
​
}
​
.article {
  @include font-size(normal);

  &.large {
    @include font-size(large);
  }
}
```

## 參考

[使用 Sass Maps 提升程式可讀、變數群組性](https://ithelp.ithome.com.tw/articles/10161389)
