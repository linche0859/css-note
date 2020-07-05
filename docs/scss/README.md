# 基礎用法

## 變數

可以分為：

- 基本(數學)運算

  ```html
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  ```

  ```scss
  $width: 500px;
  $fontSize: 100%;
  $bigFontSize: $fontSize * 1.2;
  $smallFontSize: $fontSize * 0.8;
  ul {
    width: $width;
  }
  li {
    // 因應 html 結構數量，自動分配寬度
    width: $width / 3;
    font-size: $bigFontSize;
  }
  ```

- 色彩運算

  ```scss
  $primary: blue;

  h1 {
    background-color: lighten($primary, 45%)
    color: darken($primary, 5%);
  }
  ```

### 設定變數時機

- 色彩
- 空間、尺寸

### 變數取用

變數可以用 `#{}` 取出，並用於 class 定義上，如：

```scss
$bg: '../images/';
$icon-style: blue;

.header {
  background: url(#{$bg}header.png);
}

.icon-#{$icon-style} {
  color: $icon-style;
}

// .header {
//   background: url(../images/header.png);
// }

// .icon-blue {
//   color: blue;
// }
```

## VS Code 設定

VS Code 安裝 live sass compile 後，可於 `setting.json` 中加入下方設定：

```json
{
  "liveSassCompile.settings.formats": [
    // 用於 development
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "/style"
    },
    // 用於 production
    {
      "format": "compressed",
      "extensionName": ".min.css",
      "savePath": "/dist/css"
    }
  ],
  // compile時，產生map檔案
  "liveSassCompile.settings.generateMap": false,
  // 排除被Compile的檔案
  "liveSassCompile.settings.excludeList": ["**/node_modules/**", ".vscode/**"],
  // 自動轉換瀏覽器版本，post css
  "liveSassCompile.settings.autoprefix": ["> 1%", "last 2 versions"]
}
```
