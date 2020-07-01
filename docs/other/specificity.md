# CSS 權重

權重由低至高

1. 標籤選擇器和偽元素

   ```css
   h1 {
   }

   ::before {
   }
   ```

1. 類別選擇器、屬性選擇器和偽類

   ```css
   .cat {
   }

   [type='text'] {
   }

   :hover {
   }

   :nth-child(n) {
   }
   ```

1. ID 選擇器

## 額外規則

- 一般的選擇器包含 `>`，`+` 和否定的偽類 `:not()` 不會影響 css 權重，但在 `:not()` **內** 的樣式會影響權重。

- 加在 HTML 元素上的樣式，永遠會覆蓋寫在 `.css` 檔案中的樣式。
- `!important` 可以覆蓋全部的定義樣式，當兩個相衝突的樣式都有使用 `!important`，其中會採用較多權重者。
- **權重具有不跨級別的規則**

## 參考

[CSS Specificity](https://dev.to/emmabostian/css-specificity-1kca)
