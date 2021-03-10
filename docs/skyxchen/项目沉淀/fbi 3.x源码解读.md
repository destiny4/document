##  package.json > bin "./bin/fbi"

它是一个命令名和本地文件名的映射。在安装时，如果是全局安装，npm将会使用符号链接把这些文件链接到prefix/bin，如果是本地安装，会链接到./node_modules/.bin/。然后使用`fbi`命令的时候，就会去执行`./bin/fbi`这个命令文件，一切从这里开始.

## 入口`cli.init(args)`

 ## `fbi.config(mode)`

1. 初始化mode (debug, template,global,parallel)
2. 配置fbi的configs
3. 配置logger
4. 获取本地store配置（已经使用`fbi add`过的模板）
5. 获取用户模板的options
6. 初始化task
7. 初始化template，并用mode，store，stores，configs，options，logger给template赋值
8. 初始化version
9. 监听exit事件，添加错误日志
10. 监听ctrl+c命令，调用进程终止方法`process.exit()`

## 判断是否是FBI的命令还是模板的命令

### fbi.add

1. template.add
2. version.add 
3. git.clone
4. 将模板信息存储到本地store配置.fbi/store.json
5. 执行npm install