## `ts.config.js`文件

```js
{
    "compilerOptions": {
        "outDir": "./built",
        "allowJs": true,
        "target": "es5"
    },
    "include": [
        "./src/**/*"
    ]
}
```

### TypeScript设置了一些东西:

1. 读取所有可识别的`src`目录下的文件（通过`include`）。
2. 接受JavaScript做为输入（通过`allowJs`）。
3. 生成的所有文件放在`built`目录下（通过`outDir`）。
4. 将JavaScript代码降级到低版本比如ECMAScript 5（通过`target`）。

### compileoptions选项

- 默认所有*可见的*"`@types`"包会在编译过程中被包含进来。 `node_modules/@types`文件夹下以及它们子文件夹下的所有包都是*可见的
- 指定`"types": []`来禁用自动引入`@types`包
- 自动引入只在你使用了全局的声明（相反于模块）时是重要的。 如果你使用 `import "foo"`语句，TypeScript仍然会查找`node_modules`和`node_modules/@types`文件夹来获取`foo`包。

## `webpack`集成的时候

- 要注意的是`ts-loader`必须在其它处理`.js`文件的加载器之前运行。 你可以在[React和Webpack教程](https://www.tslang.cn/docs/handbook/react-&-webpack.html)里找到使用Webpack的例子。

## 声明文件

**带属性的对象**

声明 

使用`declare namespace`描述用点表示法访问的类型或值

```js
declare namespace myLib {
    function makeGreeting(s: string): string;
    let numberOfGreetings: number;
}
```



