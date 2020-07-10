# Transition

## 各種速率

透過 `transition-timing-function` 屬性改變成現效果。

常用的有以下屬性：

- ease：緩慢的開始，中間變快，又變慢慢結束。相當於 cubic-bezier(0.25,0.1,0.25,1)。
- ease-in：緩慢的開始，後面越來越快。相當於 cubic-bezier(0.42,0,1,1)。
- ease-out：開始較快速，緩慢的結束。相當於 cubic-bezier(0,0,0.58,1)。
- ease-in-out：緩慢的開始和結束，中間加速。相當於 cubic-bezier(0.42,0,0.58,1)。
- linear：從開始到結束的速度一致。相當於 cubic-bezier(0,0,1,1)。
- cubic-bezier(n,n,n,n)：自由定義 cubic-bezier 函數，每個值為 0 到 1 之間的數字。
- step-start：直接到結束，無視持續時間。
- step-end：等到持續時間結束，才做執行。
- steps(n, end)：分為 n 個階段執行。

<TryBox>
  <other-transition-Rate />
</TryBox>

### 波動拳動圖

![Image from alias](~@image/other/transition/wave-punch.png)

利用階段性的 function 來實作動圖的效果，把背景圖設定 `transition` 動態，並且設定 13 階段的 `timing-function`，最後只要將 `hove` 的結果設定在最後一張動作位置就完成囉。

```scss
.wavePunch {
  background: url(~@image/other/transition/wave-punch.png) left bottom no-repeat;
  transition: background 1s;
  transition-timing-function: steps(13, end);
  &:hover {
    background-position: right bottom;
  }
}
```

<TryBox>
  <other-transition-WavePunch />
</TryBox>

## 參考

[CSS transition 各種速率](https://wcc723.github.io/css/2013/08/24/css-transtion-speed/)
