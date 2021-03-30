## download-git-repo

> 一个用于下载git仓库的项目的模块

## commander

> 接收终端参数，并自定义处理

```js
const program = require('commander')
const pkg = require('./package.json')
program
  .version(pkg.version)
  .option('-s, --src [value]', 'source file')
  .option(
    '-d, --dest [value]',
    'destination file,如果不提供该参数，默认覆盖源文件'
  )
  .option('-p, --split', '英文两边是否添加空格，默认false')
  .parse(process.argv)
const srcPath = path.resolve(process.cwd(), program.src)
let dest
if (!program.dest) {
  dest = program.src
} else {
  dest = program.dest
}
```

```ts
import commander, { createCommand } from 'commander';
class Demo{
  private program: commander.Command;
  constructor() {
  	this.program = this.createProgram(); // 创建program
  }
    private addCommands() {
  	const commands = regsiterCommands(this);
  	for (const command of commands) {
  		const nameAndArgs = `${command.id} ${
  			command.args ? `${command.args}`: ''
  		}`;
  		const cmd = this.program.command(nameAndArgs);
  		if(command.description){
  			cmd.description(command.description);
  		}
  		cmd.option(...command.option);
  		cmd.action((...args:any[])=>{
  	         command.run(args);
  	    });
  	}
  	// 必须在parse之前完成命令的注册
  	this.program.parse(process.argv);
  }
  async run() {
  	this.addCommands(); // 注册command
  }
}
```

## chalk

> 输出在终端的文字加上颜色

```ts
const chalk = require('chalk')
console.log(chalk.green('this is green font'))
console.log(chalk.yellow('this is yellow font'))
```

<a data-fancybox title="image-20210323111357142" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323111357142.png">![image-20210323111357142](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323111357142.png)</a>

## path使用相对路径和绝对路径

```js
const path = require('path')
const chalk = require('chalk')
const src = './test'
const abSrc = '/Users/test'
const srcPath = path.resolve(process.cwd(), src)
const abSrcPath = path.resolve(process.cwd(), abSrc)
console.log(chalk.green('相对路径', srcPath))
console.log(chalk.red('绝对路径：', abSrcPath))

```

<a data-fancybox title="image-20210323112517181" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323112517181.png">![image-20210323112517181](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323112517181.png)</a>

## tildify

> 将绝对路径转换为波形路径

```ts
const path = require('path')
const chalk = require('chalk')
const tildify = require('tildify')
const src = './test'
const abSrc = './test'
const srcPath = path.resolve(process.cwd(), src)
const abSrcPath = path.resolve(process.cwd(), abSrc)
console.log(chalk.green('使用tildify', tildify(srcPath)))
console.log(chalk.red('不实用使用tildify：', abSrcPath))
```



<a data-fancybox title="image-20210323113422097" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323113422097.png">![image-20210323113422097](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323113422097.png)</a>

## user-home

> 获取用户主目录的路径

```js
const home = require('user-home')
console.log(home)
```

## ora

> 一个spinner

```js
const ora = require('ora')

const spinner = ora('Loading unicorns').start()

setTimeout(() => {
  spinner.color = 'yellow'
  spinner.text = 'Loading rainbows'
}, 1000)

setTimeout(() => {
  spinner.succeed(`Installed dependencies`)
  //   spinner.fail('Failed to install dependencies. You can install them manually.')
}, 3000)

```

## execa

> 执行子进程

```js
const execa = require('execa')
!(async () => {
  await execa.command('git checkout -b test')
})()
```

## enquirer

> 终端交互式问答

### input

```js
const { prompt } = require('enquirer')
!(async () => {
  const response = await prompt({
    type: 'input',
    name: 'username',
    message: 'What is your username?'
  })
  console.log(response)
})()
```

<a data-fancybox title="image-20210323160114687" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323160114687.png">![image-20210323160114687](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323160114687.png)</a>

### 多个input

```js
const { prompt } = require('enquirer')
!(async () => {
  const response = await prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your username?'
    }
  ])
  console.log(response)
})()
```

<a data-fancybox title="image-20210323171222933" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323171222933.png">![image-20210323171222933](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323171222933.png)</a>

### comfirm

```js
const { prompt } = require('enquirer')
!(async () => {
  const response = await prompt({
    type: 'confirm',
    name: 'question',
    message: 'Did you like enquirer?'
  })
  console.log(response)
})()
```

<a data-fancybox title="image-20210323171318436" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323171318436.png">![image-20210323171318436](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323171318436.png)</a>

### password

```js
const { prompt } = require('enquirer')
!(async () => {
  const question = [
    {
      type: 'input',
      name: 'username',
      message: 'What is your username?'
    },
    {
      type: 'password',
      name: 'password',
      message: 'What is your password?'
    }
  ]

  let answers = await prompt(question)
  console.log(answers)
})()
```

<a data-fancybox title="image-20210323160914419" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323160914419.png">![image-20210323160914419](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323160914419.png)</a>

### [Form Prompt](https://www.npmjs.com/package/enquirer#form-prompt)

  ```js
  const { prompt } = require('enquirer')
  !(async () => {
    const question = [
      {
        type: 'form',
        name: 'user',
        message: 'Please provide the following information:',
        choices: [
          { name: 'firstname', message: 'First Name', initial: 'Jon' },
          { name: 'lastname', message: 'Last Name', initial: 'Schlinkert' },
          {
            name: 'username',
            message: 'GitHub username',
            initial: 'jonschlinkert'
          }
        ]
      }
    ]
    let answers = await prompt(question)
    console.log(answers)
  })()
  ```

  <a data-fancybox title="image-20210323162302265" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323162302265.png">![image-20210323162302265](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323162302265.png)</a>

### [MultiSelect Prompt](https://www.npmjs.com/package/enquirer#multiselect-prompt)

  ```js
  const { prompt } = require('enquirer')
  !(async () => {
    const question = [
      {
        type: 'MultiSelect',
        name: 'value',
        message: 'Pick your favorite colors',
        choices: [
          { name: 'aqua', value: '#00ffff' },
          { name: 'black', value: '#000000' },
          { name: 'blue', value: '#0000ff' },
          { name: 'fuchsia', value: '#ff00ff' },
          { name: 'gray', value: '#808080' },
          { name: 'green', value: '#008000' },
          { name: 'lime', value: '#00ff00' },
          { name: 'maroon', value: '#800000' },
          { name: 'navy', value: '#000080' },
          { name: 'olive', value: '#808000' },
          { name: 'purple', value: '#800080' },
          { name: 'red', value: '#ff0000' },
          { name: 'silver', value: '#c0c0c0' },
          { name: 'teal', value: '#008080' },
          { name: 'white', value: '#ffffff' },
          { name: 'yellow', value: '#ffff00' }
        ]
      }
    ]
    let answers = await prompt(question)
    console.log(answers)
  })()
  ```

  <a data-fancybox title="image-20210323162746466" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323162746466.png">![image-20210323162746466](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323162746466.png)</a>

  `返回键值对`

  ```js
  const { prompt } = require('enquirer')
  !(async () => {
    const question = [
      {
        // 换成Select则是单选 
        type: 'MultiSelect',
        name: 'value',
        message: 'Pick your favorite colors',
        choices: [
          { name: 'aqua', value: '#00ffff' },
          { name: 'black', value: '#000000' },
          { name: 'blue', value: '#0000ff' },
          { name: 'fuchsia', value: '#ff00ff' },
          { name: 'gray', value: '#808080' },
          { name: 'green', value: '#008000' },
          { name: 'lime', value: '#00ff00' },
          { name: 'maroon', value: '#800000' },
          { name: 'navy', value: '#000080' },
          { name: 'olive', value: '#808000' },
          { name: 'purple', value: '#800080' },
          { name: 'red', value: '#ff0000' },
          { name: 'silver', value: '#c0c0c0' },
          { name: 'teal', value: '#008080' },
          { name: 'white', value: '#ffffff' },
          { name: 'yellow', value: '#ffff00' }
        ],
        // 这样也可
        // choices: ['apple', 'grape', 'watermelon', 'cherry', 'orange']
        // 这里处理返回值
        result (names) {
          return this.map(names)
        }
      }
    ]
    let answers = await prompt(question)
    console.log(answers)
  })()
  ```

  <a data-fancybox title="image-20210323163258178" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323163258178.png">![image-20210323163258178](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323163258178.png)</a>

### [Scale Prompt](https://www.npmjs.com/package/enquirer#scale-prompt)

  ```js
  const { prompt } = require('enquirer')
  !(async () => {
    const question = [
      {
        type: 'Scale',
        name: 'experience',
        message: 'Please rate your experience',
        scale: [
          { name: '1', message: 'Strongly Disagree' },
          { name: '2', message: 'Disagree' },
          { name: '3', message: 'Neutral' },
          { name: '4', message: 'Agree' },
          { name: '5', message: 'Strongly Agree' }
        ],
        margin: [0, 0, 2, 1],
        choices: [
          {
            name: 'interface',
            message: 'The website has a friendly interface.',
            initial: 2
          },
          {
            name: 'navigation',
            message: 'The website is easy to navigate.',
            initial: 2
          },
          {
            name: 'images',
            message: 'The website usually has good images.',
            initial: 2
          },
          {
            name: 'upload',
            message: 'The website makes it easy to upload images.',
            initial: 2
          },
          {
            name: 'colors',
            message: 'The website has a pleasing color palette.',
            initial: 2
          }
        ]
      }
    ]
    let answers = await prompt(question)
    console.log(answers)
  })()
  ```

  <a data-fancybox title="image-20210323164112085" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323164112085.png">![image-20210323164112085](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323164112085.png)</a>

### [Snippet Prompt](https://www.npmjs.com/package/enquirer#snippet-prompt)

  ```js
  const semver = require('semver')
  const { Snippet } = require('enquirer')
  const prompt = new Snippet({
    name: 'username',
    message: 'Fill out the fields in package.json',
    required: true,
    fields: [
      {
        name: 'author_name',
        message: 'Author Name'
      },
      {
        name: 'version',
        validate (value, state, item, index) {
          if (item && item.name === 'version' && !semver.valid(value)) {
            return prompt.styles.danger('version should be a valid semver value')
          }
          return true
        }
      }
    ],
    template: `{
    "name": "\${name}",
    "description": "\${description}",
    "version": "\${version}",
    "homepage": "https://github.com/\${username}/\${name}",
    "author": "\${author_name} (https://github.com/\${username})",
    "repository": "\${username}/\${name}",
    "license": "\${license:ISC}"
  }
  `
  })
  prompt
    .run()
    .then(answer => console.log('Answer:', answer.result))
    .catch(console.error)
  
  ```

  <a data-fancybox title="image-20210323165051811" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323165051811.png">![image-20210323165051811](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210323165051811.png)</a>

### others

- [AutoComplete Prompt](https://www.npmjs.com/package/enquirer#autocomplete-prompt)

- [BasicAuth Prompt](https://www.npmjs.com/package/enquirer#basicauth-prompt)

- [Confirm Prompt](https://www.npmjs.com/package/enquirer#confirm-prompt)

- [Input Prompt](https://www.npmjs.com/package/enquirer#input-prompt)

- [Invisible Prompt](https://www.npmjs.com/package/enquirer#invisible-prompt)

- [List Prompt](https://www.npmjs.com/package/enquirer#list-prompt)

- [Numeral Prompt](https://www.npmjs.com/package/enquirer#numeral-prompt)

- [Password Prompt](https://www.npmjs.com/package/enquirer#password-prompt)

- [Quiz Prompt](https://www.npmjs.com/package/enquirer#quiz-prompt)

- [Survey Prompt](https://www.npmjs.com/package/enquirer#survey-prompt)

- [Select Prompt](https://www.npmjs.com/package/enquirer#select-prompt)

- [Sort Prompt](https://www.npmjs.com/package/enquirer#sort-prompt)

- [Toggle Prompt](https://www.npmjs.com/package/enquirer#toggle-prompt)

## semver

> 版本号操作工具

```js
const semver = require('semver')

semver.valid('1.2.3') // '1.2.3'
semver.valid('a.b.c') // null
semver.clean('  =v1.2.3   ') // '1.2.3'
semver.satisfies('1.2.3', '1.x || >=2.5.0 || 5.0.0 - 7.2.3') // true
semver.gt('1.2.3', '9.8.7') // false
semver.lt('1.2.3', '9.8.7') // true
semver.minVersion('>=1.0.0') // '1.0.0'
semver.valid(semver.coerce('v2')) // '2.0.0'
semver.valid(semver.coerce('42.6.7.9.3-alpha')) // '42.6.7'
```

## prettier

> 格式化输出

```js
const ejs = require('ejs')
const prettier = require('prettier')

const tmp = ejs.render('module.exports=<%-data%>', {
  data: JSON.stringify(config)
})

const t = prettier.format(tmp, { semi: false,trailingComma: 'none', parser: 'babel' })
```
