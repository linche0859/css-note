# Grid

`grid` 和 `flex` 最大不同之處，透過 grid template 來定義版型的結構，分別由 column 及 row 定義出直排與橫列的格線，內容再依隔線作安排。

## grid-template-columns 和 grid-template-rows

<TryBox>
  <other-grid-GridTemplate />
</TryBox>

```scss
.wrap {
  display: grid;
  grid-template-columns: 40% 5% auto 5% 40%;
  grid-template-rows: 25% 100px auto;
  height: 100vh;
}
```

`grid-template-columns` 定義水平方向的空間，`grid-template-rows` 定義垂直方向的空間，且可以使用大部分的單位數值。

## Grid columns repeat

<TryBox>
  <other-grid-GridColumnRepeat />
</TryBox>

```scss
.wrap {
  grid-template-columns: repeat(2, 1fr 2fr) 100px;
  /* grid-template-columns: repeat({次數}, {格線} | {格線}) | {格線}; */
}
```

- `repeat` - 重複的格線
- `fr` - 單位，可以將可用的 **剩餘空間** 作比例分割，以 `1fr` 和 `2fr` 為例，空間將被分割成 1/3 和 2/3 的大小。

## grid-auto-columns 和 grid-auto-rows

<TryBox>
  <other-grid-GridAuto />
</TryBox>

```scss
.wrap {
  display: grid;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  grid-gap: 8px;
}

// 如果以 960px 並分成 12 個欄位時，可以這樣設計
.wrap {
  display: grid;
  grid-auto-columns: 60px;
  grid-auto-flow: column;
  grid-gap: 20px;
}
```

### grid-auto-flow

以上面的範例，如果沒有設定為 `column` 則會變成垂直排列。

## 參考

[CSS Grid 屬性介紹](https://wcc723.github.io/css/2017/03/22/css-grid-layout/)

[Ten modern layouts in one line of CSS](https://web.dev/one-line-layouts/)
