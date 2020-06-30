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

## 參考

[原生 CSS 變數運用技巧（CSS Variables）](https://w3c.hexschool.com/blog/21985acb)
