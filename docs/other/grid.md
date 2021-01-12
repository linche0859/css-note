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

### 使用 `minmax` 限制格線最小和最大值

<TryBox>
  <other-grid-SidebarSays />
</TryBox>

```scss
// grid-template-columns: minmax(<min>, <max>) …)
.parent {
  display: grid;
  grid-template-columns: minmax(150px, 25%) 1fr;
}
```

### 內容自適應增減

<TryBox>
  <other-grid-PancakeStack />
</TryBox>

```scss
.parent {
  display: grid;
  grid-template-rows: auto 1fr auto;
}
```

這會將頁首和頁尾內容設置為自動 (`auto`) 採用其子物件的大小，並將剩餘空間（`1fr`）應用於主區域。

### Holy Grail Layout

<TryBox>
  <other-grid-HolyGrail />
</TryBox>

```scss
.parent {
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;
}
```

在頁首和頁尾具有自動調整大小的內容的情況下，左側和右側邊欄將根據其子物件的固有大小自動調整大小。

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

### 格線系統

如果要使用格線系統，以 12 格為基準，可以這樣設定：

```scss
.row {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.col-12 {
  grid-column: 1 / 13;
}
.col-6 {
  grid-column: 2 / 8;
}
```

### RAM (Repeat, Auto, MinMax)

<TryBox>
  <other-grid-RepeatAutoFit />
</TryBox>

```scss
.parent {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
```

使用時 `auto-fit`，當物件的寬度超過 `150px` 時，它們會拉伸以填充整個剩餘空間。如果小於 `150px` 時，會擠壓同層的物件，盡量保持自己不小於 `150px`。

如果將其更改為 `auto-fill`，則超過 `minmax` 函數中的基本大小時，它們將不會拉伸：

<TryBox>
  <other-grid-RepeatAutoFill />
</TryBox>

```scss
.parent {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}
```

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

```scss
.row {
  grid-auto-flow: row | column | row dense | column dense;
}
```

### grid-gap、grid-column-gap、grid-row-gap

格線的間隔包含垂直及水平。

```scss
grid-column-gap: { grid-column-gap };
grid-row-gap: { grid-row-gap };
grid-gap: { grid-row-gap } { grid-column-gap };
```

## grid-column-start、grid-column-end、grid-row-start、grid-row-end

物件所佔的空間位置，Column 及 Row 的起始點及終點。

```scss
.item {
  grid-column-start: <number> | <name> | span <number> | span <name> | auto
  grid-column-end: <number> | <name> | span <number> | span <name> | auto
  grid-row-start: <number> | <name> | span <number> | span <name> | auto
  grid-row-end: <number> | <name> | span <number> | span <name> | auto
}
```

- `span <number>` - 物件所佔用的欄位數
- `span <name>` - 物件所在的 grid 名稱

```scss
.item {
  grid-column-start: 2; /* 物件起始線 */
  grid-column-end: span 4; /* 終點線 = 物件所佔的空間數 */
  grid-row-start: 3; /* 物件起始線 */
  grid-row-end: auto; /* 不設定終點線 */
  z-index: 1; /* 欄位重疊可用 z-index 設定前後順序 */
}
```

## grid-column、grid-row

使用斜線 (`/`) 隔開物件佔有的空間。

```scss
.item {
  grid-column: 2 / span 4; // 從 2 的位置為起始線，並向後佔據 4 格
}
```

`grid-row` 的用法和 `grid-column` 相同。

## grid-area

- `<name>` - 使用命名的方式，透過 `grid-template-areas` 來套用
- `<row-start>` / `<column-start>` / `<row-end>` / `<column-end>` - 指定 grid 線數或 grid 名稱來定位

```scss
.item-a {
  grid-area: 2 / 2 / 4/ 4;
}
```

## 參考

[CSS Grid 屬性介紹](https://wcc723.github.io/css/2017/03/22/css-grid-layout/)

[Ten modern layouts in one line of CSS](https://web.dev/one-line-layouts/)
