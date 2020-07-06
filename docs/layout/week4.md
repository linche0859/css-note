# 第四週補充教材

## Gulp 說明

- 編譯的概念（前端與後端）
  - Gulp 是後端，對應後端的路徑
  - dist 輸出後，瀏覽器執行的是前端
- 相對路徑與絕對路徑

  例如有兩種取得圖片路徑的方式。

  ```html
  <!-- 絕對路徑 -->
  <img src="/assets/1.png" />
  <!-- 相對路徑 -->
  <img src="assets/1.png" />
  ```

  當 push 上 github 上時，分別會轉為下列格式。

  - 絕對路徑：linche0859.github.io/assets/1.png
  - 相對路徑：linche0859.github.io/project/assets/1.png

  使用絕對路徑，會找不到照片，所以使用相對路徑，會較為穩定。

## 常見的圖示運用技巧

### Fontawesome

<https://fontawesome.com/>

- 圖示最多的資源
- 分為免費及付費版（免費版目前不提供 CDN）
  - <https://cdnjs.com/libraries/font-awesome>
- 分為 JS 及 CSS 版本
  - 兩者基本運用上沒有什麼差異
  - **搭配框架** 時，CSS 版本比較穩定
  - CSS 版本：
    1. 插入偽元素
    1. 在 `content` 中提供字串
    1. 透過 FontAwesome 字體轉為圖示
  - JS 版本：
    1. 替換 html 中有 `fa` 或 `fas` 等 class 的片段
    1. 轉為 svg 格式渲染替換的位置

### Material Icon

- 技術：連字（ligatures）
  - 可以透過 `ctrl + F` 搜尋網頁關鍵字時，找到圖示
- 使用文件：<https://google.github.io/material-design-icons/>
- 圖示列表：<https://material.io/resources/icons/?style=baseline>

### Fontawesome 和 Material Icon 的選擇

兩者使用上是差不多的，由專案的需求決定：

- 需要用到 **較多** 的圖示，選擇 Fontawesome
- 需要 **較精細** 的圖示，選擇 Material Icon

## SVG

圖片可以分為點陣圖和向量圖，而 SVG 就是 **向量圖** 的結果。

### 引用外部 SVG 圖示

1. 透過 `img` 標籤引用
   ```html
   <img src="assets/images/logo.svg" />
   ```
1. 透過 ejs 動態插入

   ```ejs
   <%- include('assets/images/logo.svg') %>
   ```

   :::warning 注意
   ejs 的後端語言，只能在 ejs 的檔案中引用，無法於 html 檔案中使用
   :::

### 如何避免糟糕的 SVG 圖示

當設計出的 SVG 檔中，有包含 **亂碼** 或 `images` 標籤 (其中引入的檔案類型為 **點陣圖**)，都是屬於不好的 SVG 圖示。

因為在放大圖示時，會有模糊效果，就會失去原有 SVG 的特性。

### 自定義 SVG 樣式

- 將 SVG 結構放置於 html 中，再修改其樣式
- SVG 設定檔中更改樣式

```svg
<svg width="100%" height="105">
	<rect x="2" y="2" width="100" height="100" style="stroke: #333; stroke-width: 3; fill: FireBrick;"/>
	<rect x="120" y="2" width="200" height="100" style="stroke: #333; stroke-width: 3; fill: LightSkyBlue;"/>
</svg>
```

## 顏色的變數定義

可以參考 Bootstrap 定義。一般可以分為：

- 情境色
  - \$primary
  - \$secondary
  - \$success
  - ...
- 功能色
  - background

盡可能的使用 **情境色**，如當情境色皆使用完，才會運用功能色。

:::warning 提醒

1. 避免使用色名，如：
   ```scss
   $green: green;
   ```
   因如果有一天要改為紅色時，就會變為 `$green: red;`，增加維護上的不易性。
1. 尺寸 - 盡可能語意化，如：

   ```scss
   // good
   $large-size: 50px;
   // bad
   $h-50: 50px;
   ```

:::
