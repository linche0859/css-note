# List

List 可以簡單的聯想為 `array`，Sass 內建了一些函數提供操作 List。List 的內容可以是顏色、字串、甚至塞入 Map 也可以。

## @each

使用 Map 或是 List，可以用 `@each...in` 的迴圈來遍歷整個 Map 或是 List。

```scss
$contentList: ('danger', 'normal', 'suck');
​ @each $content in $contentList {
  .tag.#{$content}::before {
    content: $content;
  }
}

// compiled
.tag.danger {
}
.tag.normal {
}
.tag.suck {
}
```

## 管理 z-index

可以使用 List 的 `index` API 進而管理。

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
​ .dropdown {
  z-index: index($zIndexs, 'dropdown'); // 類似 indexOf
}
```

這樣一來，我們除了可以減少變數前綴的麻煩，也可以避免用區間來防止 `z-index` 被其他元素時插入的困擾。（只要直接在 List 加入值就好，不用再修改其他值）。

## List 函數

- nth
  - 取出 List 的索引位置值
  - List 的索引位置是由 1 開始
  - 同時也可以用於 Map，但取出的 key/ value 會轉成 List
- index
- join
- append
  - 類似於 `array` 的 `push`
- zip
  - 可以將兩個 List 做平行壓縮
  - [範例](https://codepen.io/linche0859/pen/OJyKzjv?editors=0100)
- length
