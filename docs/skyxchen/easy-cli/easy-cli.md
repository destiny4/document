## :apple: 简介

> 根据配置文件和模板快速生成代码页面

## :+1: 安装

```shell
 npm i easier-cli -g  
```



<a data-fancybox title="image-20210430095942272" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/temp/image-20210430095942272.png">![image-20210430095942272](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/temp/image-20210430095942272.png)</a>

## :whale: ​使用

1. 创建一个目录`easy-cli-demo`

2. [模板下载地址](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/easy-cli/easy-cli.zip) 下载完解压放根目录
3. 目录结构

<a data-fancybox title="image-20210430104611602" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/temp/image-20210430104611602.png">![image-20210430104611602](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/temp/image-20210430104611602.png)</a>

4. 根据模板生成代码

```shell
easy add demo
```

:+1:结果：

<a data-fancybox title="image-20210430104815215" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/temp/image-20210430104815215.png">![image-20210430104815215](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/temp/image-20210430104815215.png)</a>

## :baguette_bread:实际项目应用

1. 放置模板和配置文件

<a data-fancybox title="image-20210430105001370" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/temp/image-20210430105001370.png">![image-20210430105001370](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/temp/image-20210430105001370.png)</a>

2. 配置文件内容

```js
'use strict'
module.exports = {
  moduleId: '',
  name: 'easy-cli-demo使用',
  templatePath: './template',
  tableConfig: [
    {
      label: '主键',
      value: 'id',
      useInForm: true,
      search: false
    },
    {
      label: 'appid',
      value: 'appid',
      useInForm: true
    },
    {
      label: '跳转类型',
      value: 'jumpType',
      useInForm: true
    },
    {
      label: '跳转路径',
      value: 'path',
      useInForm: true,
      search: false
    }
  ]
}
```

3.`easy add demo` && `yarn dev`

<a data-fancybox title="image-20210430105610942" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/temp/image-20210430105610942.png">![image-20210430105610942](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/temp/image-20210430105610942.png)</a>

<a data-fancybox title="image-20210430105851054" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/temp/image-20210430105851054.png">![image-20210430105851054](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/temp/image-20210430105851054.png)</a>

<a data-fancybox title="image-20210430105905334" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/temp/image-20210430105905334.png">![image-20210430105905334](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/temp/image-20210430105905334.png)</a>

## :hammer_and_wrench: 配置介绍

`easy.config.js`

```js
module.exports = {
  // 模块id，标识业务id，用于生成文件名，给模板文件的 muduleId 赋值
  moduleId: '',
  // 业务标题，用于菜单显示，给模板文件的 name 赋值
  name: 'easy-cli-demo使用',
  // 模板文件路径，当前只支持本地路径
  templatePath: './template',
  // 字段配置
  // 这里配置的数组，会存储在 模板文件的 columns 数组里面 
  tableConfig: [
    {
      label: '主键',
      value: 'id',
      // 为ture，则模板文件里面的 forms 数组 这个字段会push这个值
      useInForm: true,
      // 是否加入查询框
      search: false
    },
    {
      label: 'appid',
      value: 'appid',
      useInForm: true
    },
    {
      label: '跳转类型',
      value: 'jumpType',
      useInForm: true
    },
    {
      label: '跳转路径',
      value: 'path',
      useInForm: true,
      search: false
    }
  ]
}

```

## :yellow_heart: 优化反馈

@skyxchen

