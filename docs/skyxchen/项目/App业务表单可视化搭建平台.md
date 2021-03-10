::: tip 时间
2018.09-2019.05
:::

## 简介

一个能够生成完整App业务代码的可视化搭建平台，包括前后端完整代码，创建数据库表列，同时支持前后端的二次开发。

## 设计实现

>业务类型：商业对象树增加的一个叶子节点

### 商业对象树

<img src="https://user-gold-cdn.xitu.io/2019/11/6/16e40a841d4b695a?w=870&h=453&f=png&s=35773" alt="MPFNfU.png" border="0" />

&emsp;&emsp;首先在商业对象树上注册一个业务类型，然后会生成一个贯穿整个app自定义表单设计的唯一业务标识`buscode`。

### 表注册

<img src="https://user-gold-cdn.xitu.io/2019/11/6/16e40a84613de58c?w=1427&h=456&f=png&s=31538" alt="MPFw6J.png" border="0" />

&emsp;&emsp;在注册了商业对象树之后，然后在表注册这个界面注册对应业务类型的数据库表，这里新增的表，会同时在数据库中新建对应的空表。

### 列注册

<img src="https://user-gold-cdn.xitu.io/2019/11/6/16e40a8430f2e65b?w=1586&h=720&f=png&s=89386" alt="MPFDmR.png" border="0" />

<img src="https://user-gold-cdn.xitu.io/2019/11/6/16e40a844da5da0c?w=1407&h=750&f=png&s=87533" alt="MPF0X9.png" border="0" />

&emsp;&emsp;在这里添加对应表的字段，同时会在数据库中的对应表中增加相应字段，还有一张fg_columns表会存储表名和列对应的关系，以及每列的属性。

<img src="https://user-gold-cdn.xitu.io/2019/11/6/16e40a8422f33f48?w=1906&h=202&f=png&s=48556" alt="MPmF9x.png" border="0" />

### PC端设计器

<img src="https://user-gold-cdn.xitu.io/2019/11/6/16e40a844d2c9220?w=1327&h=502&f=png&s=35978" alt="MPFtYT.png" border="0" />

&emsp;&emsp;在这个界面选择对应的业务类型，增加app自定义设计的方案，一个业务类型可以有多个方案，每次启用的只有一个，即展示给用户看的只有一个。保存好方案描述信息之后，选择对应方案，点击界面设计即可开始设计app的界面。

<img src="https://user-gold-cdn.xitu.io/2019/11/6/16e40a866b837ccc?w=1613&h=932&f=png&s=129914" alt="MPFdl4.png" border="0" />

&emsp;&emsp;设计界面由左边的工具箱和中间交互设计界面，右边属性面板组成。

<div style='display:flex;justify-content:center'>
   <img style='flex-grow:0' src="https://user-gold-cdn.xitu.io/2019/11/6/16e40a8626208f83?w=213&h=211&f=png&s=7510" alt="MPFYkV.png" border="0" /> 
    <img style='flex-grow:0' src="https://user-gold-cdn.xitu.io/2019/11/6/16e40a8618646b40?w=206&h=234&f=png&s=5749" alt="MPF8wq.png" border="0" />
    <img src="https://user-gold-cdn.xitu.io/2019/11/6/16e40a865753aae4?w=199&h=169&f=png&s=4546" alt="MPFlOs.png" border="0" style='flex-grow:0'/>
    <img src="https://user-gold-cdn.xitu.io/2019/11/6/16e40a8611f4ccdc?w=223&h=176&f=png&s=4891" alt="MPFapF.png" border="0" style='flex-grow:0' />
</div>

![MPF3mn.png](https://user-gold-cdn.xitu.io/2019/11/6/16e40a86adab5de2?w=210&h=716&f=png&s=30393)



&emsp;&emsp;字段元数据就是在前面的列注册界面注册的字段，这里的字段可以拖到中间的设计界面，然后拖到界面上之后，可以选中某一字段，在主界面的右边属性栏设置它的属性，这里的属性最终会转换成Ext控件的对应属性。

&emsp;&emsp;在主界面中拖拽容器控件和各种组件控件以及字段，设计好展示界面之后，可以在主界面的中间设计部分的编辑代码tab页，添加二开脚本。

<img src="https://user-gold-cdn.xitu.io/2019/11/6/16e40a86f0b0d9ec?w=585&h=217&f=png&s=15211" alt="MPFGT0.png" border="0" />

&emsp;&emsp;这里添加的脚本最终我会生成到app的运行代码中的页面完成事件中

<img src="https://user-gold-cdn.xitu.io/2019/11/6/16e40a86f3263c08?w=591&h=253&f=png&s=24464" alt="MPJ6EV.png" border="0" />

### 代码生成

#### App框架

&emsp;&emsp;App使用的是Sencha Touch框架，我按照这个框架的规则，先自己写了一个简单的业务demo，然后多次修改，以及埋坑，最终形成一个最佳实践的模板，所以App自定义表单生成出来的公共代码，就是依照的这个模板。

#### 代码生成逻辑 

&emsp;&emsp;在后端从上至下遍历PC设计器传过来的容器控件以及，容器控件里面的字段控件，并将其属性转换成Sencha Touch属性的JObject对象，然后按照自己写的T4模板，生成代码到服务器的AppDebug目录下。

&emsp;&emsp;部分模板代码和生成文件代码效果如下：

<img src="https://user-gold-cdn.xitu.io/2019/11/6/16e40a87c6bfd58e?w=653&h=697&f=png&s=50187" alt="MimOts.png" border="0">

<img src="https://user-gold-cdn.xitu.io/2019/11/6/16e40a86f2ee7f82?w=790&h=941&f=png&s=80499" alt="MimXhn.png" border="0">
&emsp;&emsp;上面的是生成的controller代码，完整的还包括model，store，view的代码，因为SenCha Touch是一种前端的MVC模式。

列表界面部分代码示例
<img src="https://user-gold-cdn.xitu.io/2020/4/3/1713dffb82fe8edc?w=1522&h=1930&f=png&s=275092" alt="listview" border="0">

编辑界面部分代码示例

<img src="https://user-gold-cdn.xitu.io/2020/4/3/1713dffba94b949d?w=720&h=1942&f=png&s=191636" alt="editview" border="0">

#### App效果预览

&emsp;&emsp;为了方便用户设计好界面，并生成好了代码之后可以立马查看在App中的实际效果，我还做了一个App的调试界面，这个界面的显示效果跟在App上显示的效果是一模一样的。用户可以在这里预览，看看是不是他要的效果，或者有没有缺字段，或者二开脚本有没有起作用。

<img src="https://user-gold-cdn.xitu.io/2019/11/6/16e40a872be12e88?w=447&h=837&f=png&s=32271" alt="MinHv6.png" border="0" />

#### 手机拉取

&emsp;&emsp;App自定义表单生成的文件都是放在服务器相对目录下的Appdebug这个目录下面，那么手机上是怎么看到用户设计的界面的呢？

&emsp;&emsp;在后台生成app代码的时候，我同时会将代码的存放位置，以及当前的账套号，代码版本号，业务类型存到`fg_appformenu`这个表里面。

<img src="https://user-gold-cdn.xitu.io/2019/11/6/16e40a87b979e1f6?w=1333&h=103&f=png&s=20988" alt="MiKQfA.png" border="0" />

&emsp;&emsp;然后app每次从这个表里面拉取数据，获取到有多少个自定义表单以及每个自定义表单的代码存放地址，然后从服务器的对应目录上热加载代码并运行，得到展示效果。

&emsp;&emsp;下图是生成代码目录的结构：

<img src="https://user-gold-cdn.xitu.io/2019/11/6/16e40a87c3a526f1?w=650&h=24&f=png&s=4471" alt="MiKsXV.png" border="0" />

## 总结

#### 不足之处

1. 前端二开：前端功能二开使用人为写js脚本的模式，该模式不仅要求设计者具备一定的js基础，同时会有严重的安全问题
2. 界面交互：设计器目前还是winform的框架，没有web化，样式和动画都很生硬，影响用户交互体验
3. 与第三方集成：目前无法直接使用第三方接口，需要重新修改平台的生成代码
4. 没有数据分析功能
5. 没有针对高并发处理：发布的服务还没有采用分布式架构，容器化部署

#### 难点

##### 组件抽象

构造通用的应用需要一些什么组件，解决这个问题就意味着需要对现有的所有应用和可能的应用场景进行拆分和抽象。对于一个应用抽象或许还可以，但是把抽象出来组件反过来可以构建各种应用，这又是另外一回事儿了。这就类似于一个NP问题，目前没有一个通用的公式能求出满足所有场景的应用组件，也许永远没有一个最优解，但是可以通过不断的实践和优化，抽象出适用于目前已有应用的公共基础组件。
组件的颗粒化抽象内容量太大，细节非常多，花的时间也就多。这一步是真的比较难，而且抽象的层次也非常关键，首先是基础组件，基础组件之上抽象的扩展组件（这种组件更加实用，往往可以马上展现某种功能），模块组件（拥有自己独立的业务逻辑功能的组件），再之上就是业务模板。

##### 逻辑抽象

所有的程序开发，抛开了界面和数据，剩下的就是逻辑，逻辑成应用的灵魂。什么时候去注入用户的业务逻辑，以什么样的方式去通知执行，保证逻辑正常注入并运行的同时还要兼顾不会产生安全问题。这也是难点之一

##### 生成中间语言

中间语言，指的是通过前端拖拽组件和配置完事件之后，生成的中间代码，类似AST（抽象语法树），也可以称之为描述性语言。为什么要生成中间代码，主要是为了方便框架扩展和替换。比如，现在公司的前端组件库使用的是`VUE`的，以后想换成`react`或者以后新生代的框架，通过这个中间代码，改变一下前端代码生成格式，就完成了平台的框架更新升级，后端框架亦是如此。有了中间语言，我们就不会拘泥于框架和语言的限制，将关注点更多的集中于中间语言的迭代更新，能更好的体现拥抱变化。

这个语言必须我们自己构造，类似需要积累一个字典一样，后续通过这个“字典”，将一个一个应用编辑成一篇“文章”。这个过程也很麻烦，细节很多。

&emsp;&emsp;App自定义表单这个项目前后耗时一年时间，从无到有，其中经历了太多挫折：

- 代码如何建立模板
- 如何把模板转换成文件
- 如何设计后台的设计模式，来转换属性以及方便扩展
- App预览界面的建立
- App如何热加载生成代码
- 生成代码的版本控制
- 后台代码生成出来，如何预编译并且不会重启服务器
- 不同操作员在使用App预览界面的权限控制：最高权限可以看到所有操作员生成的自定义方案界面，普通权限只能看到自己设计的界面
- 二开代码如何注入app自定义表单

&emsp;&emsp;为了解决这些问题，我的直属领导帮了不少忙，还有就是网上查阅资料。这也是我入职以来做的最有意义的一个项目。