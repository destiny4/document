### 为什么react

<a data-fancybox title="image-20210226101437980" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210226101507286.png">![image-20210226101437980](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210226101507286.png)</a>

<a data-fancybox title="image-20210226101805125" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210226101805125.png">![image-20210226101805125](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210226101805125.png)</a>

### CDN方式使用react

<a data-fancybox title="image-20210226103359941" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210226103359941.png">![image-20210226103359941](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210226103359941.png)</a>

### 为什么jsx

- 不用jsx创建虚拟dom，标签嵌套地狱

  <a data-fancybox title="image-20210226104058626" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210226104058626.png">![image-20210226104058626](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210226104058626.png)</a>

<a data-fancybox title="image-20210226104142045" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210226104142045.png">![image-20210226104142045](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210226104142045.png)</a>

<a data-fancybox title="image-20210226104325750" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210226104325750.png">![image-20210226104325750](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210226104325750.png)</a>

```js
- jsx语法规则
  - 定义虚拟DOM时，不能写引号，可以用括号
  - 标签中混入`JS表达式`使用`{}`
  - 样式的类名使用`className`,而不是`class`
  - 内联样式，要用`style={{key:value}}`的形式去写，font-size使用fontSize驼峰形式
  - 虚拟dom只能有一个根标签
  - 标签必须闭合
  - 标签首字母
    - 小写字母开头，转换为html标签
    - 大写字母开头，使用react component
```
### 函数式组件

<a data-fancybox title="image-20210226143242694" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210226143242694.png">![image-20210226143242694](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210226143242694.png)</a>

```js
function Demo(){
	return (<div className='test'>测试</div>)
}
```



> 可以去babel官网查看编译之后的源码

### 类组件

<a data-fancybox title="image-20210226145714222" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210226145714222.png">![image-20210226145714222](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210226145714222.png)</a>

> 有状态（state）为复杂组件，无状态为简单组件

> class中可以直接写赋值语句，不需要定义，表示给该类的实例一个固定属性值

#### 标准写法

<a data-fancybox title="image-20210226155921776" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210226155921776.png">![image-20210226155921776](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210226155921776.png)</a>

#### 精简写法

<a data-fancybox title="image-20210226161024217" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210226161024217.png">![image-20210226161024217](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210226161024217.png)</a>

#### props

- 添加规则和默认值

<a data-fancybox title="image-20210301110909340" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210301110909340.png">![image-20210301110909340](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210301110909340.png)</a>

- props是只读的

- props简写

<a data-fancybox title="image-20210301111311269" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210301111311269.png">![image-20210301111311269](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210301111311269.png)</a>

#### 构造函数

- 使用了constructor，必须调用super，传不传props都可以

### refs

#### 回调形式的ref

<a data-fancybox title="image-20210301143427507" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210301143427507.png">![image-20210301143427507](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210301143427507.png)</a>

#### createRef

<a data-fancybox title="image-20210301145246006" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210301145246006.png">![image-20210301145246006](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210301145246006.png)</a>

#### 总结

- 尽可能避免使用字符串ref
- 回调形式的ref，内联形式会在更新组件的时候调用两次，第一次组件为null，第二次才有被ref的组件；写成class的绑定函数形式就不会
- createRef创建的容器只能绑定一个组件，绑定多个需要创建过个容器

### 事件处理

1. 通过onXxx属性指定事件处理函数(注意大小写)

- React使用的是自定义(合成)事件, 而不是使用的原生DOM事件
- React中的事件是通过事件委托方式处理的(委托给组件最外层的元素)

2. 通过event.target得到发生事件的DOM元素对象

### 受控组件和非受控组件

### form表单受控组件使用一个函数

<a data-fancybox title="image-20210301154218253" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210301154218253.png">![image-20210301154218253](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210301154218253.png)</a>

### 生命周期

#### 旧生命周期

<a data-fancybox title="image-20210301164911628" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210301164911628.png">![image-20210301164911628](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210301164911628.png)</a>

>  生命周期的三个阶段（旧）

- **初始化阶段:** 由ReactDOM.render()触发---初次渲染

1.   constructor()

2.   componentWillMount()

3.   render()

4.   componentDidMount()

- **更新阶段:** 由组件内部this.setSate()或父组件重新render触发

1.   shouldComponentUpdate()

2.   componentWillUpdate()

3.   render()

4.   componentDidUpdate()

- **卸载组件:** 由ReactDOM.unmountComponentAtNode()触发

1.   componentWillUnmount()

#### 新生命周期

<a data-fancybox title="image-20210301174459134" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210301174459134.png">![image-20210301174459134](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210301174459134.png)</a>



> 生命周期的三个阶段（新）

- **初始化阶段:** 由ReactDOM.render()触发---初次渲染

1. constructor()

2. **getDerivedStateFromProps** 

3. render()

4. componentDidMount()

- **更新阶段:** 由组件内部this.setSate()或父组件重新render触发

1. **getDerivedStateFromProps**

2. shouldComponentUpdate()

3. render()

4. **getSnapshotBeforeUpdate**

5. componentDidUpdate()

- **卸载组件:** 由ReactDOM.unmountComponentAtNode()触发

1. componentWillUnmount()

### diff算法

根据key来diff，如果用index，那么逆序操作数据

- 页面错乱
- 不能复用已存在的元素

### 跨组件通信

:beach_umbrella: `pubsub-js` ​

<a data-fancybox title="image-20210303153431841" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210303153431841.png">![image-20210303153431841](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210303153431841.png)</a>

<a data-fancybox title="image-20210303153457659" href="https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210303153457659.png">![image-20210303153457659](https://skyxchen-1302304787.cos.ap-chongqing.myqcloud.com/markdown/image-20210303153457659.png)</a>