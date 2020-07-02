# extend

使用 `%` 加上自訂的合併樣式名稱，並再目標處使用 `@extend %名稱`，實作繼承。

```scss
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
