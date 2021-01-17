(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{421:function(t,a,s){"use strict";s.r(a);var r=s(42),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"響應式圖片設計"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#響應式圖片設計"}},[t._v("#")]),t._v(" 響應式圖片設計")]),t._v(" "),s("h2",{attrs:{id:"圖片-reset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#圖片-reset"}},[t._v("#")]),t._v(" 圖片 reset")]),t._v(" "),s("p",[t._v("一般在 reset 圖片時，會加上這段，以達到圖片依解析度不同，而自適應變化，且保有最大尺寸。")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"width-和-max-width-的差異"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#width-和-max-width-的差異"}},[t._v("#")]),t._v(" width 和 max-width 的差異")]),t._v(" "),s("p",[t._v("假設兩者的屬性值皆為 "),s("code",[t._v("100%")]),t._v("：")]),t._v(" "),s("ul",[s("li",[t._v("width：會依父元素的寬度，做滿版的寬度調整\n"),s("ul",[s("li",[t._v("如在圖片解析度較小的情況，瀏覽的視覺上會較差")])])]),t._v(" "),s("li",[t._v("max-width：等比例的寬度調整\n"),s("ul",[s("li",[t._v("如在圖片解析度較小的情況，且外容器寬度大於圖片寬度時，並不會呈現滿版效果")]),t._v(" "),s("li",[t._v("畫面縮小時，如有外容器寬度小於圖片寬度，則會自適應變化")])])])]),t._v(" "),s("h2",{attrs:{id:"圖片尺寸規劃"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#圖片尺寸規劃"}},[t._v("#")]),t._v(" 圖片尺寸規劃")]),t._v(" "),s("p",[t._v("一般會刻意設計較大張的技巧。")]),t._v(" "),s("ul",[s("li",[t._v("手機板：寬度可以設定在 600px")]),t._v(" "),s("li",[t._v("平板以上：寬度可以設定在 1024px")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("補充")]),t._v(" "),s("p",[t._v("背景圖建議放 "),s("strong",[t._v("一比一")]),t._v(" 的圖片")]),t._v(" "),s("p",[t._v("主要區塊和 icon 建議放 "),s("strong",[t._v("兩倍")]),t._v(" 圖片或 "),s("strong",[t._v("svg 格式")])])]),t._v(" "),s("h2",{attrs:{id:"banner-設計"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#banner-設計"}},[t._v("#")]),t._v(" banner 設計")]),t._v(" "),s("h3",{attrs:{id:"縮放圖片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#縮放圖片"}},[t._v("#")]),t._v(" 縮放圖片")]),t._v(" "),s("p",[t._v("一般 banner 圖片的樣式會設定為 "),s("code",[t._v("max-width: 100%")]),t._v("，所以圖片寬度會隨著螢幕的縮放自適應延伸，不會超過螢幕的寬度。")]),t._v(" "),s("p",[t._v("但在手機版上，如果採用 "),s("strong",[t._v("直式")]),t._v(" 的 banner 圖片，則有可能高度會超過手機螢幕的高度，尤其在加上 logo 或導覽列等 header 後，banner 圖片會再被往下推，如此一來會造成使用者無法看到整張圖片，需要上下滑動，影響使用者體驗。")]),t._v(" "),s("p",[t._v("另外手機版的 banner 圖片可以 "),s("strong",[t._v("依照想要強調的主題做裁切")]),t._v("，以避免 banner 畫面中的每個元素在手機版上顯示過小，反而會讓使用者覺得沒有重點。")]),t._v(" "),s("h3",{attrs:{id:"背景擷取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景擷取"}},[t._v("#")]),t._v(" 背景擷取")]),t._v(" "),s("p",[t._v("當背景圖片寬度 "),s("strong",[t._v("小於外容器寬度")]),t._v(" ，且設定 "),s("code",[t._v("background-position: center")]),t._v("、"),s("code",[t._v("background-repeat: no-repeat")]),t._v("，背景圖片的兩旁會出現白色區塊，使用者體驗上會較不好，這時可以加上 "),s("code",[t._v("background-color: 色碼")]),t._v("，將空白處補足。")])])}),[],!1,null,null,null);a.default=e.exports}}]);