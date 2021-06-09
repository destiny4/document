## 配置文件

无论是通过命令行工具`babel-cli`来进行编译，还是`webpack`这类的构建工具，通常情况下，我们都需要建立一个`Babel`配置文件来指定编译的规则。

`Babel`的配置文件是`Babel`执行时默认会在当前目录寻找的文件，主要有`.babelrc`，`.babelrc.js`，`babel.config.js`和`package.json`。它们的配置项都是相同，作用也是一样的，只需要选择其中一种。

对于`.babelrc`，它的配置是这样子

```json
{
    "presets": ["es2015", "react"],
    "plugins": ["transform-decorators-legacy", "transform-class-properties"]
  }
```

对于`babel.config.js`和`.babelrc.js`，它的配置是一样的，通过`module.exports`输出配置项

```js
module.exports = {
    "presets": ["es2015", "react"],
    "plugins": ["transform-decorators-legacy", "transform-class-properties"]
  }
```

对于`package.json`，就是在`package.json`中增加一个`babel`属性和值，它的配置是这样子

```json
 {
    "name": "demo",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "babel": {
      "presets": ["es2015", "react"],
      "plugins": ["transform-decorators-legacy", "transform-class-properties"]
    }
  }
```

仔细观察上述几种配置文件，会发现它们的配置项其实都是`plugins`和`presets`。

另外，除了把配置写在上述这几种配置文件里，我们也可以写在构建工具的配置里。对于不同的构建工具，`Babel`也提供了相应的配置项，例如`webpack`的`babel-loader`的配置项，其本质和配置文件是一样的，大家学会配置上述的一种，自然也就会其它的了，不再单独讲解。

配置文件总结起来就是配置`plugins`和`presets`这两个数组，我们分别称之为插件数组和预设数组。

除了`plugins`和`presets`这两个配置项，还有`minified`、`ignore`等，但我们平时都用不到，大家还是把精力放在`plugins`和`presets`上。

推荐使用后缀名是`js`配置文件，因为可以使用`js`做一些逻辑处理，适用性更强。举一个例子

```js
 //  这里只是举个例子，实际项目中，我们可以传入环境变量等来做处理
  var year = 2020;
  var presets = [];
  if (year > 2018) {
    presets = ["@babel/env"];
  } else {
    presets = "presets": ["es2015", "es2016", "es2017"],
  }
  module.exports = {
    "presets": presets,
    "plugins": []
  }
```

## 插件和预设

`plugin`代表插件，`preset`代表预设，它们分别放在`plugins`和`presets`，每个插件或预设都是一个`npm`包。

本节开头提到了通过`Babel`配置文件来指定编译的规则，所谓编译的规则，就是在配置文件里列出的编译过程中会用到的`Babel`插件或预设。这些插件和预设会在编译过程中把我们的`ES6`代码转换成`ES5`。

`Babel`插件的数量非常多，处理`ES2015`的有

- @babel/plugin-transform-arrow-functions
- @babel/plugin-transform-block-scoped-functions
- @babel/plugin-transform-block-scoping
  ……

处理`ES2018`的有

- @babel/plugin-proposal-async-generator-functions

- @babel/plugin-transform-dotall-regex
  
  ......

所有的插件都需要先安装`npm`包到`node_modules`后才可以使用。

`Babel`插件实在太多，假如只配置插件数组，那我们前端工程要把`ES2015`,`ES2016`,`ES2017`…下的所有插件都写到配置项里，我们的`Babel`配置文件会非常臃肿。

`preset`预设就是帮我们解决这个问题的。预设是一组`Babel`插件的集合，用大白话说就是插件包，例如`babel-preset-es2015`就是所有处理`es2015`的二十多个`Babel`插件的集合。这样我们就不用写一大堆插件配置项了,只需要用一个预设代替就可以了。另外，预设也可以是插件和其它预设的集合。`Babel`官方已经对常用的环境做了一些`preset`包

- @babel/preset-env

- @babel/preset-react

- @babel/preset-typescript

- @babel/preset-stage-0

- @babel/preset-stage-1 

  .....

所有的预设也都需要先安装`npm`包到`node_modules`。

## plugin与preset的短名称

插件可以在配置文件里写短名称，如果插件的`npm`包名称的前缀为 `babel-plugin-`，可以省略前缀。例如

```js
module.exports = {
    "presets": [],
    "plugins": ["babel-plugin-transform-decorators-legacy"]
  }
```

可以写成短名称

```js
 module.exports = {
    "presets": [],
    "plugins": ["transform-decorators-legacy"]
  }
```

如果`npm`包名称的前缀带有`npm`作用域@，例如`@org/babel-plugin-xxx`,短名称可以写成`@org/xxx`。

目前`Babel7`的官方`npm`包里绝大部分插件已经升级为`@babel/plugin-`前缀的，这种情况的短名称比较特殊了，绝大部分可以像`babel-plugin-`那样省略`@babel/plugin-`。但`babel`官方并没有给出明确的说明，所以还是推荐用全称。

预设的短名称规则与插件的类似，预设`npm`包名称的前缀为`babel-preset-`或作用域`@xxx/babel-preset-xxx`的可以省略掉`babel-preset-`。

对于`Babel7`的官方`npm`包里绝大部分预设已经升级为`@babel/preset-`前缀的，这种情况的短名称比较特殊了，绝大部分可以像`babel-preset-`那样省略`@babel/preset-`。但`babel`官方并没有给出明确的说明，例如，`@babel/preset-env`的短名称就是`@babel/env`，所以还是推荐用全称。

`plugins`插件数组和`presets`预设数组是有顺序要求的。如果两个插件或预设都要处理同一个代码片段，那么会根据插件和预设的顺序来执行。规则如下：

- 插件比预设先执行
- 插件执行顺序是插件数组从前向后执行
- 预设执行顺序是预设数组从后向前执行

## Babel插件和预设的参数

每个插件是插件数组的一成员项，每个预设是预设数组的一成员项，默认情况下，成员项都是用字符串来表示的，例如"`@babel/preset-env`"。

如果要给插件或预设设置参数，那么成员项就不能写成字符串了，而要改写成一个数组。数组的第一项是插件或预设的名称字符串，第二项是个对象，该对象用来设置第一项代表的插件或预设的参数。例如给`@babel/preset-env`设置参数：

```json
 {
    "presets": [
      [
        "@babel/preset-env",
        {
          "useBuiltIns": "entry"
        }
      ]
    ]
  }
```


