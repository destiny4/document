## `ts.config.js`文件

```json
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

```json
{
  "compilerOptions": {
    /* 基本选项 */
    "target": "ES5",                    // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs",               // 指定使用模块: 'commonjs', 'amd','system', 'umd' or 'es2015'
    "lib": [],                          // 指定要包含在编译中的库文件
    "allowJs": true,                    // 允许编译 javascript 文件
    "checkJs": true,                    // 报告 javascript 文件中的错误
    "jsx": "preserve",                  // 指定 jsx 代码的生成: 'preserve','react-native', or 'react'
    "declaration": true,                // 生成相应的 '.d.ts' 文件
    "sourceMap": true,                  // 生成相应的 '.map' 文件
    "outFile": "./",                    // 将输出文件合并为一个文件 
    "outDir": "./",                     // 指定输出目录
    "rootDir": "./",                    // 用来控制输出目录结构 --outDir. 
    "removeComments": true,             // 删除编译后的所有的注释
    "noEmit": true,                     // 不生成输出文件
    "importHelpers": true,              // 从 tslib 导入辅助工具函数
    "isolatedModules": true,            // 将每个文件做为单独的模块 (与'ts.transpileModule' 类似).
    /* 严格的类型检查选项 */            
    "strict": false,                    // 启用所有严格类型检查选项
    "noImplicitAny": false,             // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": false,          // 启用严格的 null 检查
    "noImplicitThis": false,            // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": false,              // 以严格模式检查每个模块，并在每个文件里加入 'use strict'
    /* 额外的检查 */         
    "noUnusedLocals": true,             // 有未使用的变量时，抛出错误
    "noUnusedParameters": true,         // 有未使用的参数时，抛出错误 
    "noImplicitReturns": true,          // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true, // 报告 switch 语句的 fallthrough 错误。(即，不允许 switch 的 case 语句贯穿)
    /* 模块解析选项 */
    "moduleResolution": "node",         // 选择模块解析策略: 'node' (Node.js)or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./",                    // 用于解析非相对模块名称的基目录
    "paths": {},                        // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [],                     // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [],                    // 包含类型声明的文件列表
    "types": [],                        // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true,// 允许从没有设置默认导出的模块中默认导入。
    /* Source Map Options */
    "sourceRoot": "./",                  // 指定调试器应该找到 TypeScript 文件而
    "mapRoot": "./",                     // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": false,            // 生成单个 soucemaps 文件，而不是将sourcemaps 生成不同的文件
    "inlineSources": false,              // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性
    /* 其他选项 */
    "experimentalDecorators": true,      // 启用装饰器 
    "emitDecoratorMetadata": true        // 为装饰器提供元数据的支持
    }
}

```



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




