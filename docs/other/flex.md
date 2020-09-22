# Flex 空間計算規則

`flex` 屬性依序包含三個屬性 `flex-grow`、`flex-shrink` 和 `flex-basis`。

- `flex-grow`: 元件的伸展性，是一個數值，當空間分配還有剩餘時的當前元件的伸展性，預設值為 0，如果設置為 0 則不會分配剩餘空間。
- `flex-shrink`: 元件的收縮性: 元件的伸展性，是一個數值，當空間分配還不足時的當前元件的收縮性，預設值為 1，如果設置為 0 則不會壓縮超過的空間。
- `flex-basis`: 元件的基準值，可使用不同的單位值。

## 計算概念

`flex-grow` 和 `flex-shrink` 所填入的皆是 **整數**，運作的概念上非常接近，都是 **按比例分配空間**，只是兩者是在相反的情境下運作。

## flex-grow

- 分配空間是依據比例（`flex-grow` 的總和值再重新分配）
- 是分配 **剩餘的空間**，已佔用的空間不會重新分配

如在外容器加上 `display: flex`，內部三個元件使用 `flex: 1`，會得到三個等比切分的元件(寬度各佔 33%)。

### 特殊使用方式

條件：

1. 外容器寬度 600px
1. 三個內元件設定
   1. 左方：`flex-basic: 200px`
   1. 中間：`flex-basic: 100px` 和 `flex-grow: 1`
   1. 右方：`flex-grow: 2`

```html
<div class="flex">
  <div class="item basis-200"></div>
  <div class="item basis-100 grow-1"></div>
  <div class="item grow-2"></div>
</div>
```

```css
.flex {
  display: flex;
  height: 300px;
  width: 600px;
}

.item {
  /* 無影響的屬性 */
  height: 100%;
  border: 1px solid white;
  box-sizing: border-box;
}

.basis-200 {
  flex: 0 0;
  flex-basis: 200px;
}

.basis-100 {
  flex-basis: 100px;
}

.grow-1 {
  flex-grow: 1;
  background-color: skyblue;
}

.grow-2 {
  flex-grow: 2;
  background-color: orange;
}
```

結果：中間的元件和右邊的元件等寬

計算邏輯：

1. 計算出可分配的空間：總寬(600px) - 左方元件(200px) - 中間元件的固定寬(100px) = 300px
1. 計算比例：300px / 3(`flex-grow` 總值) = 100px
1. 重新分配：
   - 右方元件(`grow: 2`) 100px \* 2 = 200px
   - 中間元件(`basis: 100px`; `grow: 1`) 100px + 100px \* 1 = 200px

## flex-shrink

- 將超出的部分重新分配，確保元素不會被裁切（如果足夠被分配完）
- **分配多餘的空間**

條件：

1. 外容器寬度 600px
1. 三個內元件設定
   1. 全部：`flex-basic: 250px`
   1. 中間：`flex-shrink: 1`
   1. 右方：`flex-shrink: 2`

實際結果並不是中間：右方 = 1 : 2，而是 200px : 150px

計算邏輯：

1. 計算多餘的空間，250px \* 3 - 600px = 150px;
1. 依據 `flex-shrink` 總數切分比例，150px / (1(中間) + 2(右方)) = 50px
1. 原始寬度依據 `flex-shrink` 扣除
   1. 中間：250px - 1 \* 50px = 200px
   1. 右方：250px - 2 \* 50px = 150px

## 參考

[Flex 空間計算規則](https://wcc723.github.io/css/2020/03/08/flex-size/)
