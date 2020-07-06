# extend

使用 `%` 加上自訂的合併樣式名稱，並再目標處使用 `@extend %名稱`，實作繼承。

```scss {1,8}
%all-h1 {
  font-size: 20px;
  line-height: 1.8;
  letter-spacing: 1px;
}

.header h1 {
  @extend %all-h1;
  color: #000000;
}

// .header h1 {
//   font-size: 20px;
//   line-height: 1.8;
//   letter-spacing: 1px;
// }

// .header h1 {
//   color: #000000;
// }
```

## mixin 與 extend 的使用時機

- `@mixin` 是將程式碼帶入到對應的 class ，同時可帶入變數。
- `@extend` 則是藉由 class 合併，並吃到共通樣式，但沒辦法帶入變數。

所以如果樣式都固定不變的，不會需要用參數帶進去改變樣式的話，那就用 `@extend`，程式碼會比較少些。

但如果你的程式碼需要帶入多個變數進行運算時，那用 `@mixin` 則較適合。

## 縮減 HTML Class 的瀏覽

如果於 html 標籤上的加入過多的 class，可能會造成瀏覽上不直觀，可以利用 `@extend` 將樣式合併：

```html
<header>
  <a href="#">link</a>
</header>
```

```scss {17,18,19}
%btn {
  display: inline-block;
  margin-bottom: 0;
  padding: 4px 12px;
  background-color: #f5f5f5;
  color: #333333;
}
%btn-primary {
  background-color: #006dcc;
}

%btn-large {
  padding: 8px 24px;
}

.header a {
  @extend %btn;
  @extend %btn-primary;
  @extend %btn-large;
}
```

### 使用時機

如果只有一個人在撰寫樣式，就可以利用此方法。

有多位協作者時，較建議使用多種樣式寫於 HTML 上的方法。
