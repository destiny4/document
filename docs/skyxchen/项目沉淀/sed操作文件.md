::: tip sed

操作文件内容

:::

## mac和linux中存在一些语法上的不同

- `Linux`

```shell
sed -i 's/something/other/' file
```

- `mac`

```shell
sed -i '' 's/something/other/' file
```

::: tip

`mac `系统中如果使用`-i`后面需要加上'',表示不需要备份文件，直接修改源文件

如果分隔符使用'|'的话，特殊符号是不需要转义的

:::

- '|'和'/'的区别

```shell
sed -i "" "s/123/aa\/bb/" test.txt
sed -i "" "s|123|aa/bb|" test.txt
```

两个命令的效果都是将`test.txt`的文件里的123替换为`aa/bb`

