## 单行省略 :accept:

```css
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

## 多行省略 :tomato:

```css
-webkit-line-clamp: 3; // 用来限制在一个块元素显示的文本的行数
display: -webkit-box; // 将对象作为弹性伸缩盒模型显示
-webkit-box-orient: vertical; //设置或检查伸缩盒对象的子元素的排列方式
text-overflow: ellipsis; // 在多行文本的情况下，用...隐藏超出范围的文本
word-break: break-all;
overflow: hidden;
```

## 选中前面2个子元素

```html
<div class='father'>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

```css
.father{
  div:nth-child(-n+2){
    color:red
  }
}
```

## 选中后面2个子元素

```html
<div class='father'>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

```css
.father{
  div:nth-last-child(-n+2){
    color:red
  }
}
```


