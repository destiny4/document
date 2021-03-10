::: tip Flow
一个JavaScript的静态类型检测工具
:::


## 特性

1. 类型接口

   `Flow` 使用类型接口查找错误，甚至不需要任何类型声明。 它也能够准确地跟踪变量的类型，就像运行时那样。

2. `JS`风格

   `Flow` 专为 `JavaScript` 程序员设计。 他能够理解常用 `JS` 方言和极具动态的特性

3. 实时反馈

   `Flow`能立刻检测代码变化，在开发 `JS` 时提供快速不断地反馈

::: tip 文档地址
[Flow文档](https://zhenyong.github.io/flowtype/docs/getting-started.html)
:::


## 简单使用

```shell
mkdir flow
cd flow
npm init -y
touch .flowconfig
touch index.js 
npm i -s -d flow-bin
```

- `package.json`里面添加一个命令`flow`:`flow index.js`

```js
{
  "name": "flow",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "flow": "flow index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "flow-bin": "^0.139.0"
  }
}

```

- `index.js`

```js
// @flow

var str = 'hello world!';
console.log(str);
```

> 运行

```shell
chenxiaolong@SKYXCHEN-MB0 flow % npm run flow

> flow@1.0.0 flow /Users/chenxiaolong/flow
> flow index.js

No errors!
```

这是确实什么都没有错误的情况下的结果，然后下面制造一个错误

```js
// @flow

var str:number = 'hello world!';
console.log(str);
```

```shell
chenxiaolong@SKYXCHEN-MB0 flow % npm run flow

> flow@1.0.0 flow /Users/chenxiaolong/flow
> flow index.js

Error ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ index.js:3:18

Cannot assign 'hello world!' to str because string [1] is incompatible with number [2]. [incompatible-type]
        1│ // @flow
        2│
 [2][1] 3│ var str:number = 'hello world!';
        4│ console.log(str);
Found 1 error
```

`Flow` 知道我们将 `string` 类型的值赋值给 `number` 类型，并且给出了错误

可能大家也注意到了`// @flow` 这个注释，这个注释一定是放在需要检查的文件第一行，即正式语法前，不是文本的第一行，告诉 `Flow` 当前文件需要检查，如果去掉就不会检查

去掉注释后我们再执行检测，就会出现 `No errors`

## `Flow` VS `TypeScript`

### `Flow`

> `Facebook` 开发了这个 `Flow` ，它是一个 `JavaScript` 静态类型检查器，位于现有`JS`代码之上。它是一种基于 `Flow` 的打字工具，而不是编程语言。它做了很多工作让我们更有效率。它使我们的程序更快、更聪明、更自信、更大规模。

> `Flow` 使用静态类型注释检查代码中的错误，`type` 注释允许我们告诉 `Flow` 我们希望代码如何工作，而 `Flow` 将确保它以相同的方式工作。该 `Flow` 是可增量接受的，它可以很容易地从我们的代码库中添加和删除，而不会破坏任何东西。当我们希望仅为项目的一个部分启用类型检查时，它非常有用。

### `TypeScript`

> `TypeScript` 是一种开源的纯面向对象的编程语言。它是一个强类型的 `JavaScript` 超集，可以编译成纯 `JavaScript` 。`TypeScript` 是由微软在 `Apache 2` 许可下开发和维护的。它不是直接在浏览器上运行的，它需要一个编译器来编译和生成 `JavaScript` 文件，`TypeScript` 源文件为 `”.ts”` 扩展名。

### 更多对比

|                      | TypeScript                                                   | Flow                                                         |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Flow                 | 它是 `JavaScript` 语言的一个类型化超集。它是微软推出的开源和免费的编程语言。 | 它是一种基于 `Flow` 的打字工具，而不是编程语言。它是一个 `JavaScript` 静态类型检查器，位于现有JS代码之上。流的建立是为了支持快速和精确的代码分析。 |
| 设计目标             | 它用于通过在正确性和生产力之间取得平衡来识别程序中的错误。   | 它用于强制类型健全/安全。                                    |
| 用例(流行的框架集成) | 当我们在 `Angular 2` 或更高版本上工作时，它会成为一个更好的选择。 | 如果我们致力于 `React`,` Flow` 将成为更好的选择，因为它很容易与 `babel` 和现有基础设施集成。 |
| 好处                 | 主要的好处是: 它使用静态类型作为一个主要优点。提供有用的工具，例如代码重构、自动完成、导航等。它有优秀的 `IDE` 支持。它可以很容易地与 `VSCode` 集成，这使得编辑器如此流行。 | 主要的好处是: 它使用静态类型作为一个主要优点。它提供了强有力的程序分析。它可以很容易地理解代码。它对程序进行了强大的分析和控制。 |
| 特性                 | `Typescript`的主要特点是: 编译时类型检查,类型注解,类型擦除,类型推断,枚举类型,接口,命名空间，泛型元组 | `Flow` 的主要特征是: 精度，可靠性速度，高吞吐量，路径敏感，低延迟类型推断，实时反馈，易于整合容易理解的 `JavaScript` 模式 |
| 服务                 | 除了提供静态类型之外，它还为我们提供了强大的语言服务和适当的工具，包括代码重构、导航和自动完成。 | 除了提供静态类型之外，`Flow` 还为我们提供了广泛的过程间分析，并开发了对代码的深入理解。 |
| 优势                 | `TypeScript` 的优点是: 流行的框架支持`(Vue, React, Angular)`强大的社区强大的IDE支持与JavaScript的兼容性声明文件 | `Flow` 的优点有: 支持任何 `JS` 文件易于整合对 `JS` 模式有较强的理解，实时反馈，类型转换，容易可读性，容易修改 |
| 缺点                 | `TypeScript` 的缺点是: 另一种编程语言较难与现有的JS项目整合  | `Flow` 的缺点有: 小社区不太关注类型更小的 `IDE` 支持。       |
| 大小                 | 42.4 MB                                                      | 68.4 MB                                                      |

## 兼容性

- 不兼容除 `.js` 结尾的文件的类型检测，已经测试过 `.ts,.vue` 文件里面使用 `flow` 检测，都没有作用，会被自动忽略

- `.html`文件里面的 `script` 标签里面加 //`@flow`也不行
- 总结一下就是 `flow` 只能检测 `.js` 结尾的文件

> 安利一个好用的工具，基于`yeedomliu`(刘懿东)的`php`版本的自动格式化 `.md` 文件里面的的英文，效果就是自动给 英文加上``反括号

使用方式：

```shell
npm i krystal -g
krystal -s [源md文件路径] -d [目标md文件路径]
```

栗子：

```shell
krystal -s /Users/skyxchen/documents/test.md -d /Users/skyxchen/documents/test2.md
```

参数说明：

- `-V` 查看版本
- `-h` 查看帮助
- `-s` 源文件
- `-d` 目标文件
- `-p` 是否在英文两边添加空格，默认 `false` 

> `-p` 使用栗子 

```shel
krystal -s /Users/skyxchen/documents/test.md -d /Users/skyxchen/documents/test2.md -p
```

