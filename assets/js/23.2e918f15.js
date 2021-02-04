(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{373:function(t,a,s){t.exports=s.p+"assets/img/rendering.7ce52b89.png"},422:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"優化網頁的渲染"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#優化網頁的渲染"}},[t._v("#")]),t._v(" 優化網頁的渲染")]),t._v(" "),n("p",[t._v("Rendering 的各個階段：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(373),alt:"Rendering"}})]),t._v(" "),n("ol",[n("li",[t._v("JavaScript – 用 JavaScript 修改 DOM 和 CSS 產生動畫")]),t._v(" "),n("li",[t._v("Style calculations – 計算每個元素的 Computed style")]),t._v(" "),n("li",[t._v("Layout – 計算元素的位置、大小")]),t._v(" "),n("li",[t._v("Paint – 將元素的文字、顏色、圖片等等繪製在多個 Layer 上")]),t._v(" "),n("li",[t._v("Compositing – 以正確的順序將 Layers 合併")])]),t._v(" "),n("blockquote",[n("p",[t._v("有關渲染的詳細運作，可以參考 "),n("a",{attrs:{href:"https://ithelp.ithome.com.tw/articles/10248720",target:"_blank",rel:"noopener noreferrer"}},[t._v("這裡"),n("OutboundLink")],1),t._v("。")])]),t._v(" "),n("h2",{attrs:{id:"javascript"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),n("p",[t._v("大部分的瀏覽器會以每秒 60 次的頻率刷新頁面，反過來說只要瀏覽器來不及在 16 毫秒（1000/60）內產出下一個畫面就會讓使用者感覺卡卡的，影響使用體驗。")]),t._v(" "),n("h3",{attrs:{id:"製作動畫"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#製作動畫"}},[t._v("#")]),t._v(" 製作動畫")]),t._v(" "),n("p",[t._v("JavaScript 作為 Rendering 的第一階段，最適合修改 Style 的時機就在 "),n("strong",[t._v("每一幀剛開始")]),t._v(" 的時候，而有些的動畫套件或範例會使用 "),n("code",[t._v("setTimeout")]),t._v("、"),n("code",[t._v("setInterval")]),t._v(" 來修改樣式，就容易出現太晚執行或是在一幀內修改兩次的狀況。")]),t._v(" "),n("blockquote",[n("p",[t._v("有關 Worker 的說明，可以參考 "),n("a",{attrs:{href:"https://ithelp.ithome.com.tw/articles/10249554",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章"),n("OutboundLink")],1),t._v(" 的 Worker 段落。")])]),t._v(" "),n("h4",{attrs:{id:"requestanimationframe"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requestanimationframe"}},[t._v("#")]),t._v(" "),n("code",[t._v("requestAnimationFrame")])]),t._v(" "),n("p",[t._v("使用 "),n("code",[t._v("requestAnimationFrame")]),t._v(" 才能確保 JavaScript 在每一幀的開頭執行，且使用者頁面跳離分頁時會自動停止執行。")]),t._v(" "),n("h2",{attrs:{id:"style-calculations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#style-calculations"}},[t._v("#")]),t._v(" Style Calculations")]),t._v(" "),n("p",[t._v("計算一個元素的 Computed style 首先要找出所有匹配該元素的 Selector，再利用所有 Style 算出最終的 Computed style，Chrome 在計算 Computed style 時有一半的時間都花在 Selector 比對。")]),t._v(" "),n("p",[t._v("因此 "),n("strong",[t._v("降低 Selectors 的複雜度")]),t._v(" 能有效地提升效能，如：")]),t._v(" "),n("div",{staticClass:"language-scss line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-scss"}},[n("code",[t._v("body .container ."),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("box")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("nth-child")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("2n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".black ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("p",[t._v("前者需要確定該元素是不是偶數順序的子元素、上層元素使否包含 "),n("code",[t._v("container")]),t._v("、"),n("code",[t._v("body")]),t._v(" class，後者只需要確定該元素有沒有 "),n("code",[t._v("black")]),t._v(" 這個 class，當元素數量非常多的時候，在效能上會有明顯差異。")]),t._v(" "),n("h2",{attrs:{id:"layout"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#layout"}},[t._v("#")]),t._v(" Layout")]),t._v(" "),n("p",[t._v("每次改變 Styles 時瀏覽器都會檢查哪些元素需要重新 Layout，且只要動到一個元素，底下所有子元素都需要重新 Layout。")]),t._v(" "),n("h3",{attrs:{id:"layout-thrashing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#layout-thrashing"}},[t._v("#")]),t._v(" Layout Thrashing")]),t._v(" "),n("p",[t._v("有些行為會讓瀏覽器強制 Layout，一次可能沒什麼問題，但如果是迴圈就會再一次 Rendering 中觸發多次 Layout。")]),t._v(" "),n("p",[t._v("以下面程式碼為例：")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" boxes "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelectorAll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.box'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" box "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" boxes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetWidth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 強制 Layout")]),t._v("\n  box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("px")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改 Style")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("ol",[n("li",[t._v("讀取元素的 "),n("code",[t._v("offsetWidth")]),t._v(" 時瀏覽器需要強制 Layout 才能算正確的寬度")]),t._v(" "),n("li",[t._v("馬上修改 Style，下次讀取 "),n("code",[t._v("offsetWidth")]),t._v(" 時又需要再次 Layout")]),t._v(" "),n("li",[t._v("不斷讀寫穿插的行為引起效能爆炸 (Layout Thrashing)")])]),t._v(" "),n("p",[t._v("試著只進行一次的讀取，或是把狀態儲存起來來達到優化：")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" boxWidth "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" boxes "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelectorAll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.box'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" box "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" boxes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  boxWidth "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("boxWidth"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("px")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("h3",{attrs:{id:"fastdom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fastdom"}},[t._v("#")]),t._v(" FastDOM")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/wilsonpage/fastdom",target:"_blank",rel:"noopener noreferrer"}},[t._v("FastDOM"),n("OutboundLink")],1),t._v(" 利用排序讀寫行為，把「讀寫讀寫讀寫」變為「讀讀讀寫寫寫」來減少 Layout 次數，提升效能。")]),t._v(" "),n("BaseIframe",{attrs:{"url-id":"qBqOLKZ"}}),t._v(" "),n("h2",{attrs:{id:"觸發-layout-的時機"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#觸發-layout-的時機"}},[t._v("#")]),t._v(" 觸發 Layout 的時機")]),t._v(" "),n("p",[t._v("只要修改的 Styles 和 "),n("strong",[t._v("排版")]),t._v(" 有關都需要 Layout，而修改 DOM、Resize 也是，但如果只有改變顏色相關的 Styles 就可以跳過 Layout 階段，進行 Paint 和 Compositing，詳細的觸發機制可以參考 "),n("a",{attrs:{href:"https://csstriggers.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Triggers"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("h2",{attrs:{id:"paint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#paint"}},[t._v("#")]),t._v(" Paint")]),t._v(" "),n("h3",{attrs:{id:"layers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#layers"}},[t._v("#")]),t._v(" Layers")]),t._v(" "),n("p",[t._v("為了盡可能的重複利用上次的繪製結果，瀏覽器會把元素獨立到不同 Layer，只重繪有改變的 Layer，除了讓瀏覽器自行判斷外，遇到效能瓶頸時可以用 "),n("code",[t._v("will-change")]),t._v(" 屬性把元素獨立到不同 Layer。")]),t._v(" "),n("p",[t._v("但 "),n("strong",[t._v("每建立一層 Layer 都需要額外的記憶體")]),t._v("，因此不建議在沒有測量效能的情況下就隨意把元素獨立到新的 Layer。")]),t._v(" "),n("h3",{attrs:{id:"降低範圍和複雜度"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#降低範圍和複雜度"}},[t._v("#")]),t._v(" 降低範圍和複雜度")]),t._v(" "),n("p",[t._v("重繪的範圍是 Layer 中所有元素的聯集，也就是說只要螢幕的左上角和右下角各有一個點，重繪範圍就是整個螢幕。")]),t._v(" "),n("p",[t._v("而重繪時跟模糊有關的 Style 通常會需要更多效能，例如 "),n("code",[t._v("box-shadow")]),t._v(" 的 "),n("code",[t._v("blur-radius")]),t._v("。")]),t._v(" "),n("h2",{attrs:{id:"觸發-paint-的時機"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#觸發-paint-的時機"}},[t._v("#")]),t._v(" 觸發 Paint 的時機")]),t._v(" "),n("p",[t._v("除了 "),n("code",[t._v("transform")]),t._v(" 和 "),n("code",[t._v("opacity")]),t._v(" 之外，修改任意的 Styles 都會觸發 Paint 階段，反之只修改這兩種 Styles 就能跳過 Layout、Paint 階段。")]),t._v(" "),n("h2",{attrs:{id:"參考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#參考"}},[t._v("#")]),t._v(" 參考")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://ithelp.ithome.com.tw/articles/10249554",target:"_blank",rel:"noopener noreferrer"}},[t._v("Performance - Rendering Optimization"),n("OutboundLink")],1)])],1)}),[],!1,null,null,null);a.default=e.exports}}]);