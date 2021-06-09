## preset预设的选择

在`Babel6`的时代，常见的`preset`有`babel-preset-es2015`、`babel-preset-es2016`、`babel-preset-es2017`、`babel-preset-latest`、`babel-preset-stage-0`、`babel-preset-stage-1`、`babel-preset-stage-2`等。

`babel-preset-es2015`、`babel-preset-es2016`、`babel-preset-es2017`分别是`TC39`每年发布的进入标准的`ES`语法的转换器预设，我们在这里称之为年代`preset`。

目前，`Babel`官方不再推出`babel-preset-es2017`以后的年代`preset`了。

`babel-preset-stage-0`、`babel-preset-stage-1`、`babel-preset-stage-2`、`babel-preset-stage-3`是`TC39`每年草案阶段的`ES`语法转换器预设

从`Babel7`版本开始，上述的预设都已经不推荐使用了，`babel-preset-stage-X`因为对开发造成了一些困扰，也不再更新。

`babel-preset-latest`，在`Babel6`的时候是你在使用它的时候所有年代`preset`的集合，在`Babel6`最后一个版本，它是`babel-preset-es2015`、`babel-preset-es2016`、`babel-preset-es2017`这三个的集合。因为`Babel`官方不再推出`babel-preset-es2017`以后的年代`preset`了，所以`babel-preset-latest`定义变成了`TC39`每年发布的进入标准的`ES`语法的转换器预设集合。其实，和`Babel6`时的内涵是一样的。

`@babel/preset-env`包含了`babel-preset-latest`的功能，并对其进行增强，现在`@babel/preset-env`完全可以替代`babel-preset-latest`。

> 经过一番梳理，可以总结为以前要用到的那么多`preset`预设，现在只需一个`@babel/preset-env`进行标准的`ES6`语法转换



在实际开发过程中，除了使用`@babel/preset-env`对标准的`ES6`语法转换，我们可能还需要类型检查和`react`等预设对特定语法转换。这里有三个官方预设可以使用：

- @babel/preset-flow
- @babel/preset-react
- @babel/preset-typescript

> 总结起来，`Babel`官方的`preset`，我们实际可能会用到的其实就只有4个：

- @babel/preset-env
- @babel/preset-flow
- @babel/preset-react
- @babel/preset-typescript

> 一个普通的`vue`工程，`Babel`官方的`preset`只需要配一个`@babel/preset-env`就可以了。

### @babel/preset-env

> 我们可以使用@babel/preset-env的语法转换功能，除了进行语法转换，该预设还可以通过设置参数项进行针对性语法转换以及polyfill的部分引入。
>
> 如果需要对某个preset设置参数，该preset就不能以字符串形式直接放在presets的数组项了。而是应该再包裹一层数组，数组第一项是该preset字符串，数组第二项是该preset的参数对象。如果该preset没有参数需要设置，则数组第二项可以是空对象或者不写第二项。以下几种写法是等价的：

```js
module.exports = {
    presets: ["@babel/env"],
    plugins: []
}
module.exports = {
    presets: [["@babel/env", {}]],
    plugins: []
}
module.exports = {
    presets: [["@babel/env"]],
    plugins: []
}
```

如果你使用过vue或react的官方脚手架cli工具，你一定会在其package.json里看到browserslist项，下面该项配置的一个例子

```js
"browserslist": [
    "> 1%",
    "not ie <= 8"
 ]
```

上面的配置含义是，目标环境是市场份额大于1%的浏览器并且不考虑IE8及一下的IE浏览器。Browserslist叫做目标环境配置表，除了写在package.json里，也可以单独写在工程目录下.browserslistrc文件里。我们用browserslist来指定代码最终要运行在哪些浏览器或node.js环境。Autoprefixer、postcss等就可以根据我们的browserslist，来自动判断是否要增加CSS前缀（例如'-webkit-'）。我们的Babel也可以使用browserslist，如果你使用了@babel/preset-env这个预设，此时Babel就会读取browserslist的配置。

如果我们的@babel/preset-env不设置任何参数，Babel就会完全根据browserslist的配置来做语法转换。如果没有browserslist，那么Babel就会把所有ES6的语法转换成ES5版本。

如果我们在browserslist里指定目标环境是Chrome60

```js
// 转换前
 var fn = (num) => num + 2;
// 转换后
"use strict";
  var fn = num => num + 2;
```

如果我们在browserslist里指定目标环境是Chrome38,转换后

```js
"use strict";
  var fn = function fn(num) {
    return num + 2;
  };
```



Babel使用browserslist的配置功能依赖于@babel/preset-env，如果Babel没有配置任何预设或插件，那么Babel对转换的代码会不做任何处理，原封不动生成和转换前一样代码

既然@babel/preset-env可以通过browserslist针对目标环境不支持的语法进行语法转换，那么是否也可以对目标环境不支持的特性API进行部分引用呢？这样我们就不用把完整的polyfill全部引入到最终的文件里，可以大大减少体积。

答案是可以的，但需要对@babel/preset-env的参数项进行设置才可以

#### 参数项

##### targets

该参数项可以取值为字符串、字符串数组或对象，不设置的时候取默认值空对象{}。

该参数项的写法与browserslist是一样的，下面是一个例子

```js
  module.exports = {
    presets: [["@babel/env", {
      targets: {
        "chrome": "58",
        "ie": "11"
      }
    }]],
    plugins: []
  }
```

如果我们对@babel/preset-env的targets参数项进行了设置，那么就不使用browserslist的配置，而是使用targets的配置。如不设置targets，那么就使用browserslist的配置。如果targets不配置，browserslist也没有配置，那么@babel/preset-env就对所有ES6语法转换成ES5的。

正常情况下，我们推荐使用browserslist的配置而很少单独配置@babel/preset-env的targets。

##### useBuiltIns

useBuiltIns项取值可以是"usage" 、 "entry" 或 false。如果该项不进行设置，则取默认值false。

useBuiltIns这个参数项主要和polyfill的行为有关。在我们没有配置该参数项或是取值为false的时候，polyfill就是我们上节课讲的那样，会全部引入到最终的代码里。

useBuiltIns取值为"entry"或"usage"的时候，会根据配置的目标环境找出需要的polyfill进行部分引入。让我们看看这两个参数值使用上的不同。

##### useBuiltIns:"entry","usage" 

使用useBuiltIns:"usage"后，Babel除了会考虑目标环境缺失的API模块，同时考虑我们项目代码里使用到的ES6特性。只有我们使用到的ES6特性API在目标环境缺失的时候，Babel才会引入core-js的API补齐模块。

'entry'这种方式不会根据我们实际用到的API进行针对性引入polyfill，而'usage'可以做到。另外，在使用的时候，'entry'需要我们在项目入口处手动引入polyfill，而'usage'不需要。

需要注意的是，使用'entry'这种方式的时候，只能import polyfill一次，一般都是在入口文件。如果进行多次import，会发生错误。

#### corejs

取默认值或2的时候，Babel转码的时候使用的是core-js@2版本（即core-js2.x.x）。因为某些新API只有core-js@3里才有，例如数组的flat方法，我们需要使用core-js@3的API模块进行补齐，这个时候我们就把该项设置为3。

需要注意的是，corejs取值为2的时候，需要安装并引入core-js@2版本，或者直接安装并引入polyfill也可以。如果corejs取值为3，必须安装并引入core-js@3版本才可以，否则Babel会转换失败并提示

```shell
`@babel/polyfill` is deprecated. Please, use required parts of `core-js` and `regenerator-runtime/runtime` separately
```

#### modules

这个参数项的取值可以是"amd"、"umd" 、 "systemjs" 、 "commonjs" 、"cjs" 、"auto" 、false。在不设置的时候，取默认值"auto"。

该项用来设置是否把ES6的模块化语法改成其它模块化语法。

我们常见的模块化语法有两种：（1）ES6的模块法语法用的是import与export；（2）commonjs模块化语法是require与module.exports。

在该参数项值是'auto'或不设置的时候，会发现我们转码前的代码里import都被转码成require了。

如果我们将参数项改成false，那么就不会对ES6模块化进行更改，还是使用import引入模块。

使用ES6模块化语法有什么好处呢。在使用Webpack一类的打包工具，可以进行静态分析，从而可以做tree shaking 等优化措施。

## plugin插件的选择

虽然`Babel7`官方有90多个插件，不过大半已经整合在`@babel/preset-env`和`@babel/preset-react`等预设里了，我们在开发的时候直接使用预设就可以了。

目前比较常用的插件只有`@babel/plugin-transform-runtime`。目前我做过的几个项目，前端工程已经很少见到里使用其它的插件了。

> @babel/runtime把所有语法转换会用到的辅助函数都集成在了一起

@babel/plugin-transform-runtime有三大作用

> 1.自动移除语法转换后内联的辅助函数（inline Babel helpers），使用@babel/runtime/helpers里的辅助函数来替代；
>
> 2.当代码里使用了core-js的API，自动引入@babel/runtime-corejs3/core-js-stable/，以此来替代全局引入的core-js/stable;
>
> 3.当代码里使用了Generator/async函数，自动引入@babel/runtime/regenerator，以此来替代全局引入的regenerator-runtime/runtime；
