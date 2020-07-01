# 變數運用技巧

使用 CSS 變數時也區分為兩個階段：

1. 定義變數：CSS Variables 的變數定義 **必須** 定義在 **CSS 選取器內**，大多數來說會建議定義在 **:root** 最高層級的選取器便於取用。

   使用 `--自訂名稱` 作為屬性的方式來宣告變數

   ```css
   :root {
     --primary: Aquamarine;
     --background-color: Teal;
   }
   ```

1. 取用變數值：一般來說宣告變數會使用 `var` {變數名稱} 的方式使用，但在 CSS Variables 則是需要在 取值時 才加入 `var` (變數名稱)。

   使用 `var (--變數名稱)` 來套用

   ```css
   body {
     background: var(--background-color);
   }
   ```

## 搭配 RWD

相對於 Sass 的變數來說，CSS 的變數是可以再次改變的，且改變的方式也是依據 CSS **「後者覆蓋前者** 的特性。

```css
:root {
  --font-size: 14px;
}

/* 使用變數定義文字大小 */
p {
  font-size: var(--font-size);
}

@media (min-width: 480px) {
  :root {
    --font-size: 18px;
  }
}
```

## Javascript 操作 CSS 變數

此方式也就幾乎跳脫所有的限制可自由運用 CSS 變數。

設定 CSS Variables 與設定一般 CSS 屬性方式是相同的，先選取 `document.documentElement` 就能在下方的 `style` 設定屬性 `{ '--變數名稱', '值' }`。

```css
:root {
  --size: 200px;
}
```

```js
const root = document.documentElement;
root.style.setProperty('--size', `${this.value}px`);
```

## 使用不科學的 Calc 做計算

`calc` 是作為函式使用，因此可將預期運算的方法置入 `calc()` 的括號內即可。

```css
.box-1 {
  width: calc(100% - var(--size));
}
```

## 計算色彩

在 CSS 色彩中除了常見的色碼外（ex: `#fff`），`rgb`、`hls` 也都是常見的色彩標示方式，這些色彩標示方式都是直接置入 **純數值**。因此，也可透過 `calc` 這一個神奇的運算方法來調整它。

```css
/* 定義一個值 */
:root {
  --c: 255;
}

/* 搭配不同的運算給予不同的 r, g, b */
body {
  background-image: linear-gradient(
    rgb(calc(var(--c) - 60), calc(var(--c) - 40), calc(var(--c))),
    rgb(calc(var(--c) - 20), calc(var(--c) - 10), calc(var(--c)))
  );
}
```

## 參考

[原生 CSS 變數運用技巧（CSS Variables）](https://w3c.hexschool.com/blog/21985acb)
