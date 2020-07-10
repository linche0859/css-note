# if

:::tip 提醒

如果變數都沒符合 `@if` 與 `@else if` 的話，一定要在最後面加上 `@else`。
:::

運用 `if` 結合 `mixin` 撰寫一個產生三角形的 function：

```scss
//預設是正三角形，如要做等腰三角形，請將 type 預設變數改為 1
@mixin triangle($size, $color, $align: top, $type: 0.86666) {
  height: 0;
  width: 0;
  @if $align == top {
    border-bottom: ($size * $type) solid $color;
    border-left: ($size/2) solid transparent;
    border-right: ($size/2) solid transparent;
  } @else if $align == right {
    border-left: ($size * $type) solid $color;
    border-top: ($size/2) solid transparent;
    border-bottom: ($size/2) solid transparent;
  } @else if $align == bottom {
    border-top: ($size * $type) solid $color;
    border-left: ($size/2) solid transparent;
    border-right: ($size/2) solid transparent;
  } @else if $align == left {
    border-right: ($size * $type) solid $color;
    border-top: ($size/2) solid transparent;
    border-bottom: ($size/2) solid transparent;
  } @else if $align == right-top {
    border-right: $size solid $color;
    border-bottom: $size solid transparent;
  } @else if $align == left-top {
    border-left: $size solid $color;
    border-bottom: $size solid transparent;
  } @else if $align == right-bottom {
    border-right: $size solid $color;
    border-top: $size solid transparent;
  } @else if $align == left-bottom {
    border-left: $size solid $color;
    border-top: $size solid transparent;
  }
}
```

<TryBox>
  <scss-if-Triangle />
</TryBox>
