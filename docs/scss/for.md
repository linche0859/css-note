# for

```scss
@for $i from 0 through 3 {
  .font-#{$i} {
    font-size: 1rem * $i;
  }
}
```

### 建立網格系統

```scss
$gridNumber: 12;

@for $i from 1 through $gridNumber {
  .col-#{$i} {
    width: 100% * $i / $gridNumber;
  }
}
```

### 引用外部變數

結合 `list`、`nth()`、`invert` 的綜合應用。

```scss
$boxBackground: blue, red, pink, orange;
$boxLength: length($boxBackground);

@for $i from 1 through $boxLength {
  .card-#{nth($boxBackground, $i)} {
    background: invert(nth($boxBackground, $i));
    color: nth($boxBackground, $i);
  }
}
```

```scss
.card-blue {
  background: yellow;
  color: blue;
}

.card-red {
  background: cyan;
  color: red;
}
// ...
```
