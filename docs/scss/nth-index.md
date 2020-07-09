# nth() 和 index()

## nth()

取出變數列表的指定位置樣式：

```scss {4}
$textColor: red, orange, yellow, green;

.content {
  background-color: nth($background, 3);
}
```

範例中使用 **數字** 做為索引會有問題，如今天需要替全部 `.content` 的 `background` 做樣式更換時，需一行一行做修改，會增加維護上的困難。

## index()

取出變數列表的指定位置索引：

```scss {3}
$textColor: red, orange, yellow, green;

$index: index($textColor, yellow);

// result 3
```

:::tip 提醒

`index` 的索引是由 **1** 開始。

:::

## 運用 nth() 和 index()

不用的頁面，有不同的背景色和文字顏色，於是可以把配對的樣式都列於變數中，只要透過 `index` 找出索引，再使用 `nth` 找出樣式，即可提高易修改性：

```scss {5,8}
$page: coffee, cart, cloth, child;
$textColor: red, orange, yellow, green;
$background: #fff, #000, #000, gray;

$style: index($page, child);

.content {
  background-color: nth($background, $style);
  color: nth($textColor, $style);
}

// result
// .content {
//   background-color: gray;
//   color: green;
// }
```

### 開發優點

1. 以後有新的樣式，只要修改/引入一隻 CSS，降低 CSS 請求數外，CSS 量也變小了
1. 如果要再新增網頁樣式，只要在後面繼續寫逗號並加上樣式即可
