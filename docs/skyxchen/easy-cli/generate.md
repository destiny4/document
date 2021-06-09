
## generate（模板生成器）

### 安装`easier-cli`

```shell
 npm i easier-cli -g
```

`easy -V` 检测是否安装成功

<a data-fancybox title="image-20210609144154349" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210609144154349.png">![image-20210609144154349](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210609144154349.png)</a>

### 使用

1. 拷贝模板文件夹到项目目录（或者任意目录）

<a data-fancybox title="image-20210609144327771" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210609144327771.png">![image-20210609144327771](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210609144327771.png)</a>

图中`loginTemplate`是模板文件夹，模板文件夹中的文件内容类似以下，被圈中的是`ejs`的模板语法。[ejs中文文档戳我:hand:](https://ejs.bootcss.com/#about)

<a data-fancybox title="image-20210609144509620" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210609144509620.png">![image-20210609144509620](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210609144509620.png)</a>

<a data-fancybox title="image-20210609144536489" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210609144536489.png">![image-20210609144536489](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210609144536489.png)</a>

<a data-fancybox title="image-20210609144645857" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210609144645857.png">![image-20210609144645857](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210609144645857.png)</a>

2. 在根目录下创建数据源文件`easy.config.js`

<a data-fancybox title="image-20210609145014796" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210609145014796.png">![image-20210609145014796](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210609145014796.png)</a>

`easy.config.js`

```js
// 在模板文件中 data 的取值对象就是下面这个导出的对象
// data=下面这个导出的对象
module.exports = {
  // 需要被赋能的模板文件夹路径
  templatePath: './loginTemplate',
  // 赋能之后的结果文件输出路径
  outputPath:'./login',
  title:'登陆',
  background:'#FFFFFF',
  name:'腾讯文旅'
}
```

3. 执行`easy g`

<a data-fancybox title="image-20210609145431334" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210609145431334.png">![image-20210609145431334](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210609145431334.png)</a>

4. 结果展示

<a data-fancybox title="image-20210609145454158" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210609145454158.png">![image-20210609145454158](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210609145454158.png)</a>

<a data-fancybox title="image-20210609145512798" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210609145512798.png">![image-20210609145512798](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210609145512798.png)</a>

<a data-fancybox title="image-20210609145537805" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210609145537805.png">![image-20210609145537805](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210609145537805.png)</a>

