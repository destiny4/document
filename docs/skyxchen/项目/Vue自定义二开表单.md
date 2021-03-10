::: tip 时间
2018.9-2019.3
:::

## 需求

1.  重排界面，设置必输项、只读、隐藏；
2. 支持表单二开、注入脚本、扩展表单逻辑；
3. 支持界面按组织分配、实现千人千面；
4. UI配置信息可以平滑升级；
5. 代码规范；

## 实现思路

&emsp;&emsp;发请求获取配置好的数据，将配置好的js字符串转成对应的函数利用Vuex存储，在控件调用对应的方法时，同时触发Vuex内对应的函数对数据进行操作，触发双向绑定更新

## 简介

1. 界面UI（元数据）描述文件：

   数据格式是一个描述类型的js对象，这里截取部分

   <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bbcd78e3635?w=462&h=496&f=png&s=26571" alt="KH86nx.png" border="0" />

2. 自定义界面设计器

   根据返回的界面UI数据。渲染出一个配置页面

   - 在自定义界面设计器中调整参数，拖拽等等操作，保存，重新打开页面获取最新配置

   - 二开人员注入js代码

     <a href="https://imgchr.com/i/KH8WND"><img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bbcf2d1efbc?w=680&h=342&f=png&s=113307" alt="KH8WND.png" border="0" /></a>

3. 业务界面

   下图是根据后端返回的通过设计器自定义过的UI的js对象，渲染出来的页面

   <a href="https://imgchr.com/i/KH8gHK"><img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bbcfe4351a2?w=680&h=353&f=png&s=75720" alt="KH8gHK.png" border="0" /></a>

4. 研发人员使用方法

   - 业务点跟组件的data添加数据项

     1. viewModel:为当前业务单据的所有数据（为多层，与UI层次对应），id为（form或grid）容器id，itemId为表单项对应的itemId；

        <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bbcf0ce37f3?w=398&h=233&f=png&s=11550" alt="KH8sj1.png" border="0" /> 

     2. fieldUIProInfo:表单项UI对应的配置描述项,用于快速找到对应节点并修改UI的展示，结构和viewModel一样；

        <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bbcde02fb35?w=366&h=205&f=png&s=9511" alt="KH8rcR.png" border="0" />

     3. `UIConfig`:初始化后获取到的配置数据，用于存储渲染整个业务的配置数据，是`viewModel`和`fieldUIProInfo`的数据来源；  

     4. `fieldEventInfo`:研发人员编写的表单项上对应的事件集合，存放在单独的一个js内，结构需和`viewModel`一样，详情在编写业务代码模块会讲； 

        <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bbde633e5fa?w=555&h=242&f=png&s=9343" alt="KH8RAO.png" border="0" />

     5. 以上几个为关键项，研发人员只需要在data中添加`fieldEventInfo`即可  

        <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bbdb3b3ecec?w=603&h=30&f=png&s=3553" alt="KH8f4e.png" border="0" />

   - 初始化Data

     &emsp;&emsp;将后续需要$set操作的数据用`mixins`插入data，下面部分是util封装的数据，把上面需要的几个关键点都放在里面。  

     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bbdc15efa8c?w=527&h=310&f=png&s=13343" alt="KH849H.png" border="0" />

     <p style='color:red'>研发人员需要再data平级部分，加入minxins</p>
     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bbdf3ab59cc?w=523&h=47&f=png&s=3781" alt="KH853d.png" border="0" />
- 初始化UI和注入二开函数
   
  &emsp;&emsp;在created（vue生命周期函数）里面调用一下封装好的初始化方法，传入请求UI数据需要的参数（根据bustype,获取ui，这里暂时先用phid），这里会把二开函数注入vuex和对viewModel基础数据进行双向绑定，后续再详细说明.
   
  <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bbe08d0702f?w=717&h=96&f=png&s=8569" alt="KxA5sP.png" border="0" />
   
- 绑定后台的值
   
  &emsp;&emsp;在mounted钩子函数里面通过ajax获取数据并赋值，所有的数据都绑在viewModel里面，找到id对应的值进行赋值操作.
   
  <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bbe27198940?w=1029&h=45&f=png&s=6396" alt="KH8IgA.png" border="0" />
   
- 编写页面模板
   
  &emsp;&emsp;在模板里面加入对应需要使用的组件使用自己需要的组件,传入里面对应的id(模块里对应的id)、`UIConfig`、`fieldEventInfo`、`viewModel`、root(用于里面绑定`fieldEventInfo`事件的this指向最外层vm).
   
  <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bbebe0832e3" alt="KH8ojI.png" border="0" />
   
- 编写业务代码
   
  1. 编写`fieldEventInfo`，可以单独用一个js文件存放业务对应的函数，下面是`fieldEventInfo`的模型，函数执行时，this指向最外层vm，直接操作`this.viewModel`和`this.fieldUIProInfo`数据即可.
   
     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bbebd314bd8?w=555&h=242&f=png&s=9343" alt="KH87ut.png" border="0" />
   
  
   
  2. 这里是报销主信息的一个小例子`fieldEventInfo.EccClbxForm.phid_emp`代表报销人这个节点，`onHelpSelect`代表该节点通用帮助回调事件.
   
     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bbe84a288cc?w=1364&h=853&f=png&s=93803" alt="KH8LE8.png" border="0" />
   
- 二开保存前校验
   
  &emsp;&emsp; 保存onSave之前，`$store.dispatch(‘executeFunc’, {key: ‘’, event: ‘onBeforeSave’})`通过vuex调用二开注册的校验函数在回调后进行保存，key为对应业务点的唯一标识（根据`bustype`,获取ui，这里暂时先用phid）.
   
  <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bbeb663a474?w=1279&h=276&f=png&s=33703" alt="KH8bHf.png" border="0" />  
   
  
   
- 注意事项
   
  >  必须用`mixin`引入`rootConfigMixin`，否则在初始化UI配置内部$set时会报错。  
     >
     >  必须在对应业务的最外层的组件内调用初始化`initCreated()`，这样才能保证二开函数的this指向最外层。  
     >
     > 组件必须传入root，用来保证研发人员编写的函数在组件中执行时this指向最顶层的vm。
     >
     > `fieldEventInfo`结构请按照要求编写，在组件内对应的函数是根据`[id][itemId][event]`来查找的。
   
5. 二开人员使用方法

   - UI调整

     &emsp;&emsp;在自定义界面设计器调整参数，拖拽等等操作，保存，重新打开页面获取最新配置  

   - 编写二开脚本

     &emsp;&emsp;在配置页，找到对应节点，再右下里面找到对应事件点击edit，在弹窗内编辑，关于代码的编写在实际例子中再讨论.

     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bbed99c83ce?w=637&h=275&f=png&s=19677" alt="KH8OUS.png" border="0" />

   - 调试js代码

     &emsp;&emsp;如上图，在代码中加入一个console.log,执行后在控制台可以找到一行输出，点最后那个找到对应代码，打断点进行调试.  

     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bc0d4c2f5ef?w=1485&h=50&f=png&s=2972" alt="KH8X4g.png" border="0" />

     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bbefab0c9fc?w=1015&h=419&f=png&s=53407" alt="KH8vCQ.png" border="0" />

   - 注意事项

     > 接收到的参数固定命名为param
     >
     > 保存完后需重新打开对应页面获得新UI配置才有效果  
     >
     > 注意校验前事件（onBeforeSave）需要return true或者false判断校验结果  

6. 实例

   - 简单说明
     1. `fieldEventInfo`和二开执行的函数this我们会保证都指向顶层vm，只需要`this.viewModel.id.itemId` = xxx即可修改对应的数据，通过双向绑定触发更新看，`this.fieldUIProInfo.id.itemId.xxx` = xxx即可控制UI配置；把代码写js文件里和写二开里面差不多，仅仅是获取参数不同（二开获取参数为param），下面就把代码均放在二开里面保存进行演示.
     2.  记得二开里面参数用param，记得保存后要重新打开详情页获取新的UI配置.
     3. 由于目前配置里面只用到了一个组件渲染，所以这边手动添加了一个组件作为例子，但是值用let `tabs = this.$refs.tabs`进行操作.

   - 给兄弟组件赋值

     &emsp;&emsp;这里我们给部门和公司赋值，事件在`onHelpSelect`的回调里  

     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bbfaf5774aa?w=637&h=275&f=png&s=19677" alt="KH8x3j.png" border="0" />

     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bc018cbe602?w=1628&h=131&f=png&s=15685" alt="KHGSvn.png" border="0" />

     &emsp;&emsp;选择一条点确定

     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bbf86ba6a9f?w=977&h=388&f=png&s=26391" alt="KHG9uq.png" border="0" />

     &emsp;&emsp;赋值成功是这样的，公司部门的值也被修改了

     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bbfc4de08b6?w=1628&h=129&f=png&s=16324" alt="KHGCD0.png" border="0" />

   - 跨父组件给其他组件赋值  

     &emsp;&emsp;这里我们就给那个写死的组件赋值，如果实际有的话只需要`this.viewModel[另一个id]`you 

     就好了，这里先用`let tabs = this.$refs.tabs`代替

     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bbfc4a7798a?w=787&h=165&f=png&s=6655" alt="KHGPbV.png" border="0" />

     &emsp;&emsp;这里把事件写在了通用帮助的onChange里面，触发事件后

     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bc08ff97ef2?w=1611&h=312&f=png&s=43289" alt="KHGFET.png" border="0" />

   - 控制必填或者禁用

     &emsp;&emsp;直接再之前那个通用帮助里面多加2行，`fieldUIProInfo`和`viewModel`一样，用`id.itemId`找到对应的位置，然后我们把部门的必填取消，把公司变成只读

       <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bc0ba973e7b?w=637&h=275&f=png&s=19677" alt="KHGkUU.png" border="0" />

     &emsp;&emsp;修改成功

     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bc1b2b52c99?w=1643&h=109&f=png&s=16192" alt="KHGA5F.png" border="0" />

   - 给列表插入新数据

     &emsp;&emsp;配置grid的组件还在研发中，先用之前之前插入的那个列表代替一下。最后操作实际是一样的。

     &emsp;&emsp;直接在报销人`onChange`里面触发了，给tabs里面对应的record数组push了一个值

     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bc150180ab9?w=758&h=206&f=png&s=10588" alt="KHGVC4.png" border="0" />

     &emsp;&emsp;添加成功

     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bc0ccb39216?w=1554&h=166&f=png&s=15360" alt="KHGZ8J.png" border="0" />

7. 实现原理

   - 简介

     1. 利用mixin把我们需要的`viewModel,fieldUIProInfo,UIConfig`加入data内 

     2. 使用$set设置双向绑定 

     3. 利用new Function()将字符串转变为函数存入vuex，通过触发对应事件（后续$on会讲到），通知vuex，在vuex中找到唯一标识key，执行对应的函数  

     4. 在上一步new Function()时，bind改变函数this指向，使this指向最外层vm，这样二开编写的函数内部可以用`this.viewModel.id.itemId`直接操作数据

     5. 在组件内部监听child-event事件，根据事件参数，找到fieldEventInfo对应业务代码，并执行，使用.call使this指向最外层vm

        <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bc0e358fa20?w=1359&h=235&f=png&s=29831" alt="KHGe29.png" border="0" />

     6. 在表单项使用$on绑定对应event类型（根据`fieldEventInfo`和`functionCollection`所包含的事件类型进行绑定），并在相应的时机使用`$emit`触发事件，被`$emit`触发的事件会做2件事，先通知`vuex`去触发二开执行的函数（promise），再抛出`child-event`事件通知组件执行`fieldEventInfo`内对应的业务代码  

   - `functionCollection`

     > 用于存放函数集合，在返回的数据中结构是这样  

     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bc16a46de4d?w=405&h=197&f=png&s=9144" alt="KHGmvR.png" border="0" />

     &emsp;&emsp; `initCreated()`的时候，遍历`functionCollection`，找到对应节点的事件，用`new Function`将存在`event`的js字符串转成函数，用bind使this指向该业务节点最外层vm，存储在`functionCollection[key][event]`内，最后将`functionCollection`存入`vuex`内.

     &emsp;&emsp;比较关键的点就是要想一套规则，保证key是唯一的，这个key是在配置页面初始化的时候插入的`funcId`，只要保证配置页面的`funcId`唯一这边是不需要处理的.

     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bc1b9eb7762?w=1376&h=406&f=png&s=63115" alt="KHGuK1.png" border="0" />    

   - 关于this为什么要指向最外层节点

     &emsp;&emsp;比如我们在子节点调用这个函数，此时如果要和同级节点进行联动的话，需要`$parent.xxx.xxx`；假如外层由tab包着，那$parent要一层层往上找，碰到一些复杂的组件可能需要`$parent.$parent.xxx.xxx`，用起来就很麻烦。如果我们在该业务节点的最外层进行初始化，this指向该业务最外层的`vm`，在最外层定义有2个特殊值，`fieldUIProInfo`控制UI渲染，`viewModel`控制数据渲染，在编写业务代码和二开代码时，可以通过这2个值找到任意一个你需要的修改的地方，就像之前实例里面用到的`this.viewModel.EccClbxForm.phid_dept`直接找到了对应的部门那个数据，可以让代码看起来更直观.  

   - 事件绑定&on如何通知vuex触发二开函数

     &emsp;&emsp;Vue有一个用于父子组件通信的机制$emit和$on，$on可以将事件绑定在当前组件_events里面

     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bc1994201ee?w=961&h=425&f=png&s=36450" alt="KHGKDx.png" border="0" />

     &emsp;&emsp;通过$emit触发，一个事件可能绑定多个函数，所以他这里有个循环，我们后续只绑定一个  

     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bc1c1c14e4a?w=366&h=28&f=png&s=2864" alt="KHGMb6.png" border="0" />

     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bc272b275dc?w=735&h=147&f=png&s=16409" alt="KHGlVK.png" border="0" />

     &emsp;&emsp;handler为对应`cbs[i]`,context为vm,args为我们emit时传入的参数，详情可以自己研究一波源码

     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bc22c9535a6?w=829&h=38&f=png&s=4702" alt="KHG1UO.png" border="0" />

     &emsp;&emsp;在组件内找到对应的节点，把prop传入的event类型进行绑定，然后在$emit触发对应事件时通知vuex执行二开函数并抛出child-event事件去触发fieldEventInfo对应事件，这样我们就不需要在各个节点手动去绑定那些事件。这里之前也有测试过把二开事件直接在这里执行，运行起来也没什么问题，后续可以考虑深入研究一波

     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bc2975f6712?w=1368&h=794&f=png&s=109058" alt="KHGGPe.png" border="0" />

     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bc277984f97?w=879&h=127&f=png&s=14403" alt="KHG35D.png" border="0" />

     对应节点可以看到我们$on绑定上去的事件

     <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bc2917a410c?w=323&h=109&f=png&s=5072" alt="KxQjtx.png" border="0" />

     &emsp;&emsp;这里获取节点的时候，部分节点还在渲染，导致可能在mounted下获取不到节点，其实update钩子后也存在部分拿不到的情况，所以在1s的延时之后再进行事件绑定，这1s为事件的挂载，不影响UI渲染，后续需要进一步研究  

   - `viewModel、fieldUIProInfo`初始化

     1. 根据`UIConfig`的数据，生成对应`viewModel`和`fieldUIProInfo  `

     2. 表单项显示的值，我们通过`props`将`viewModel`的值分别传给相应的子组件，将该值绑定到显示的部分，通过改变`viewModel`的值即可达到更新页面值的效果

     3. 表单项均为`UIConfig`内对应的配置渲染出来，在初始化时，我们将`UIConfig`对应单项的值存入`fieldUIProInfo.id.itemId`，即通过`fieldUIProInfo.id.itemId`就可以找到并直接修改在`UIConfig`内的那个值，从而触发页面UI显示的变化  

        <img src="https://user-gold-cdn.xitu.io/2019/11/4/16e35bc2de7d6a87?w=1351&h=444&f=png&s=54733" alt="KHGJ8H.png" border="0" />

     4. 将该数据定义在最外层，使用`this.viewModel.id.itemId` = xx即可修改对应节点的值，`this.fieldUIProInfo.id.itemId.readOnly`= true即可修改页面显示配置，`fieldUIProInfo`还可以和`viewModel`配合起来最后做校验用；上面讲到二开的this指向最外层，此时在编写二开代码的时候也只需要`this.viewModel`、`this.fieldUIProInfo`即可对想要操作的值进行操作，一层一层往下点   f