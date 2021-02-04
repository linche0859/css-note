# 優化網頁的渲染

Rendering 的各個階段：

![Rendering](./images/rendering.png)

1. JavaScript – 用 JavaScript 修改 DOM 和 CSS 產生動畫
1. Style calculations – 計算每個元素的 Computed style
1. Layout – 計算元素的位置、大小
1. Paint – 將元素的文字、顏色、圖片等等繪製在多個 Layer 上
1. Compositing – 以正確的順序將 Layers 合併

> 有關渲染的詳細運作，可以參考 [這裡](https://ithelp.ithome.com.tw/articles/10248720)。

## JavaScript

大部分的瀏覽器會以每秒 60 次的頻率刷新頁面，反過來說只要瀏覽器來不及在 16 毫秒（1000/60）內產出下一個畫面就會讓使用者感覺卡卡的，影響使用體驗。

### 製作動畫

JavaScript 作為 Rendering 的第一階段，最適合修改 Style 的時機就在 **每一幀剛開始** 的時候，而有些的動畫套件或範例會使用 `setTimeout`、`setInterval` 來修改樣式，就容易出現太晚執行或是在一幀內修改兩次的狀況。

> 有關 Worker 的說明，可以參考 [文章](https://ithelp.ithome.com.tw/articles/10249554) 的 Worker 段落。

#### `requestAnimationFrame`

使用 `requestAnimationFrame` 才能確保 JavaScript 在每一幀的開頭執行，且使用者頁面跳離分頁時會自動停止執行。

## Style Calculations

計算一個元素的 Computed style 首先要找出所有匹配該元素的 Selector，再利用所有 Style 算出最終的 Computed style，Chrome 在計算 Computed style 時有一半的時間都花在 Selector 比對。

因此 **降低 Selectors 的複雜度** 能有效地提升效能，如：

```scss
body .container .box:nth-child(2n) {
  background: #000;
}

.black {
  background: #000;
}
```

前者需要確定該元素是不是偶數順序的子元素、上層元素使否包含 `container`、`body` class，後者只需要確定該元素有沒有 `black` 這個 class，當元素數量非常多的時候，在效能上會有明顯差異。

## Layout

每次改變 Styles 時瀏覽器都會檢查哪些元素需要重新 Layout，且只要動到一個元素，底下所有子元素都需要重新 Layout。

### Layout Thrashing

有些行為會讓瀏覽器強制 Layout，一次可能沒什麼問題，但如果是迴圈就會再一次 Rendering 中觸發多次 Layout。

以下面程式碼為例：

```js
const boxes = document.querySelectorAll('.box');
for (let box of boxes) {
  const width = box.offsetWidth; // 強制 Layout
  box.style.width = `${width + 10}px`; // 修改 Style
}
```

1. 讀取元素的 `offsetWidth` 時瀏覽器需要強制 Layout 才能算正確的寬度
1. 馬上修改 Style，下次讀取 `offsetWidth` 時又需要再次 Layout
1. 不斷讀寫穿插的行為引起效能爆炸 (Layout Thrashing)

試著只進行一次的讀取，或是把狀態儲存起來來達到優化：

```js
let boxWidth = 100;
const boxes = document.querySelectorAll('.box');
for (let box of boxes) {
  boxWidth += 10;
  box.style.width = `${boxWidth}px`;
}
```

### FastDOM

[FastDOM](https://github.com/wilsonpage/fastdom) 利用排序讀寫行為，把「讀寫讀寫讀寫」變為「讀讀讀寫寫寫」來減少 Layout 次數，提升效能。

<BaseIframe url-id="qBqOLKZ"></BaseIframe>

## 觸發 Layout 的時機

只要修改的 Styles 和 **排版** 有關都需要 Layout，而修改 DOM、Resize 也是，但如果只有改變顏色相關的 Styles 就可以跳過 Layout 階段，進行 Paint 和 Compositing，詳細的觸發機制可以參考 [CSS Triggers](https://csstriggers.com/)。

## Paint

### Layers

為了盡可能的重複利用上次的繪製結果，瀏覽器會把元素獨立到不同 Layer，只重繪有改變的 Layer，除了讓瀏覽器自行判斷外，遇到效能瓶頸時可以用 `will-change` 屬性把元素獨立到不同 Layer。

但 **每建立一層 Layer 都需要額外的記憶體**，因此不建議在沒有測量效能的情況下就隨意把元素獨立到新的 Layer。

### 降低範圍和複雜度

重繪的範圍是 Layer 中所有元素的聯集，也就是說只要螢幕的左上角和右下角各有一個點，重繪範圍就是整個螢幕。

而重繪時跟模糊有關的 Style 通常會需要更多效能，例如 `box-shadow` 的 `blur-radius`。

## 觸發 Paint 的時機

除了 `transform` 和 `opacity` 之外，修改任意的 Styles 都會觸發 Paint 階段，反之只修改這兩種 Styles 就能跳過 Layout、Paint 階段。

## 參考

[Performance - Rendering Optimization](https://ithelp.ithome.com.tw/articles/10249554)
