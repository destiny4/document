# AST

> https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md

## 开发流程

1. parse

> 字符串 -> AST

2. traverse

> 遍历 AST,对 AST 进行增删改等操作 。 通过 visitor 模式 , 拦截不同节点的 type ，触发对应的处理函数。

3. generator

> AST -> 字符串

### 插入节点示例

```ts
import * as core from '@babel/core'
import generator from '@babel/generator'
import * as t from 'babel-types'

const code = await fs.promises.readFile(path)

const ast = core.parse(code.toString(), {
  sourceType: 'module',
  plugins: ['@babel/plugin-transform-typescript']
})

core.traverse(ast, {
  Program: function (path) {
    // 创建 新的import 节点
    const importDefaultSpecifier = t.importDefaultSpecifier(
      t.identifier(moduleId)
    )
    const importNode: any = t.importDeclaration(
      [importDefaultSpecifier],
      t.stringLiteral(`./${moduleId}`)
    )
    // 找到最后一个import节点
    const lastIndexImport = path.node.body.findIndex(
      it => it.type === 'VariableDeclaration'
    )
    // 插入新的节点
    path.node.body.splice(lastIndexImport, 0, importNode)
  },
  ArrayExpression: function (path) {
    path.node.elements.push(t.identifier(moduleId) as any)
  }
})

const { code } = generator(ast)
```

### 替换节点示例

```js
const { parse, traverse } = require('@babel/core')
const types = require('babel-types')
const generate = require('@babel/generator').default
const obj = `const obj={
    "a":1,
    "b":{
        "c":2
    }
}`
const t = parse(obj)
traverse(t, {
  StringLiteral (path) {
    path.replaceWith(types.identifier(path.node.value))
  }
})
const { code } = generate(t)
console.log(code)
```

<a data-fancybox title="image-20210330130803196" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210330130803196.png">![image-20210330130803196](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210330130803196.png)</a>

## 文档参考

1. babel-types

> https://babeljs.io/docs/en/babel-types#docsNav

2. babel/traverse

> https://babeljs.io/docs/en/babel-traverse#docsNav

3. @babel/parser

> https://babeljs.io/docs/en/babel-parser

