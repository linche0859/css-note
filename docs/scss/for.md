# for 和 random()

## @for

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

## random()

預設會返回 1 ~ 100 中的值，而 random() 中只能放入 **單一整數** 去定義上限。如果設定 `random(500)` 則會返回 1 ~ 500 中的數值。

---

假設一個背景要做很多圓形圖案飛過的特效。條件：

1. 每個圓形的 **背景顏色** 都需要不一樣
1. 每個圓形的 **移動速度** 都要不一樣

```scss
$boxes: 100;

// animation mixin
@mixin move($name, $duration: 3s) {
  animation-name: $name;
  animation-duration: $duration;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(
    #{random(1000) / 1000},
    #{random(1000) / 1000},
    #{random(1000) / 1000},
    #{random(1000) / 1000}
  );
}

@for $i from 1 through $boxes {
  $name: move#{$i};
  @keyframes move#{$i} {
    from {
      left: percentage(random(100) / 100);
      top: percentage(random(100) / 100);
    }
    to {
      left: percentage(random(100) / 100);
      top: percentage(random(100) / 100);
    }
  }
  .box-#{$i} {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgb(random(255), random(255), random(255));
    color: #000;
    box-shadow: 5px 5px #000;
    @include move($name);
  }
}
```

<TryBox>
  <scss-for-Random />
</TryBox>
