# placeholder

## 引入 Font Awesome

1.  引入 URL

```css
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css');
```

2.  前往 font-awesome 複製 icon 的 Unicode 碼

![font-awesome](./font-awesome.png)

此碼前方加上 `&#x` 後，成為 `&#xf0e0`，填入 `input` 的 `placeholder`，命名一新的 class，此為 `useFontAwesomeFamily`

```html
<input class="useFontAwesomeFamily" id="email" type="email" placeholder="&#xf0e0">
```

3.  撰寫 `useFontAwesomeFamily` 的 CSS 設定，因為會有瀏覽器支援的問題，所以有許多 **前綴詞**

```css
.useFontAwesomeFamily::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  font-family: 'Font Awesome 5 Brands' !important;
  font-weight: 900;
}
.useFontAwesomeFamily:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-family: 'Font Awesome 5 Brands' !important;
  font-weight: 900;
}
.useFontAwesomeFamily::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  font-family: 'Font Awesome 5 Free' !important;
  font-weight: 900;
}
.useFontAwesomeFamily:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  font-family: 'Font Awesome 5 Free' !important;
  font-weight: 900;
}
.useFontAwesomeFamily::-ms-input-placeholder {
  /* Microsoft Edge */
  font-family: 'Font Awesome 5 Free' !important;
  font-weight: 900;
}
.useFontAwesomeFamily::placeholder {
  /* Most modern browsers */
  font-family: 'Font Awesome 5 Free' !important;
  font-weight: 900;
}
```
