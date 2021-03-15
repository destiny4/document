
::: tip 时间
2019/05——2019/08
:::

## 功能简介

- 前端发送一个请求到后端请求内嵌查询数据，该请求带有一个能找到内嵌查询明细数据的guid。页面成功接收到返回数据后，内嵌查询组件会根据规则渲染出查询界面。
- 查询界面可配置，可修改。
- 要符合用户交互习惯，即查询值能以中文展示到查询框，再次打开内嵌查询页面时，能记录用户已设置的值。
- 安全问题处理，避免sql注入
- 查询性能优化
- 和PC自定义表单公用一个内嵌查询数据（核心功能）

## 使用方式

&emsp;&emsp;在设计PC自定义表单的列表界面的时候，在内嵌查询设计框里面，表单设计者将用户可能会用到的查询字段拖进内嵌查询设计框里面。查询框里面的字段控件可以为公司封装的控件库所有组件，类似：通用帮助（一个可以展示数据的modal），下拉框，时间日期控件等等。

&emsp;&emsp;设计好之后，点击发布，打开设计好的APP自定义表单，即可查看效果。

> 必须要先设计好APP自定义表单，内嵌查询只是一个APP自定义表单里面的一个高级查询控件。

<a data-fancybox title="M68c5R.gif" href="https://user-gold-cdn.xitu.io/2019/11/19/16e81a34034fbe40?w=1087&h=687&f=gif&s=479126">![M68c5R.gif](https://user-gold-cdn.xitu.io/2019/11/19/16e81a34034fbe40?w=1087&h=687&f=gif&s=479126)</a>

<a data-fancybox title="MgPjDf.gif" href="https://user-gold-cdn.xitu.io/2019/11/19/16e82470e691c819?w=457&h=585&f=gif&s=153664">![MgPjDf.gif](https://user-gold-cdn.xitu.io/2019/11/19/16e82470e691c819?w=457&h=585&f=gif&s=153664)</a>

> gif画质失真，UI显示有格子，以及背景有重影。

## 实现细节

### 内嵌查询控件使用配置

```javascript
    {
      "xtype": "ngQueryPanel",
      "docked": "top",
      "pageId": "Web:EFORM9000000004List",
      "store":"ListStore"
      "hidden": false
    }
```

如上，开发员使用及其简单，只需要配置控件摆放位置，唯一标识和数据源就行，然后内嵌查询里面的过滤，分页，取数将全部在控件中代理，无需开发员写额外代码。

### 控件初始化

1. 搜索框界面初始化，定义一个搜索文本框，搜索按钮，高级按钮，以及一个绝对定位的清空图标

<a data-fancybox title="MgZ5QJ.png" href="https://user-gold-cdn.xitu.io/2019/11/19/16e82470c10b51c5?w=444&h=48&f=png&s=2218">![MgZ5QJ.png](https://user-gold-cdn.xitu.io/2019/11/19/16e82470c10b51c5?w=444&h=48&f=png&s=2218)</a>

2. 给控件添加事件

   - 输入框keyup事件,前端store查询

     ```javascript
     //  输入框事件   
     var queryInput = this.down('ngSearch[name=queryInput]')
     queryInput.on('keyup', function (field) {
         var me=this;
          if (field.timeIT) {
              clearTimeout(field.timeIT);
              field.timeIT = null;
          }
          field.timeIT = setTimeout(function () {
              field.timeIT = null;
              var value = field.getValue().trim();
              var store = me.getListView().getStore('ListStore');
              store.filterBy(function(obj){
                  var data=obj.data;
                  for(var i in data){
                      if(data.hasOwnProperty(i)){                                                        if(i!='id'&&data[i]&&data[i].toString().includes(value)){
                         return true;
                       }
                   }
               }
           })
       }, 500);
     })
     ```

   - 清空按钮事件,清空查询条件，数据重刷到第一页

     ```javascript
     //  清空图标事件
     var deleteImg = this.down('image[name=clearIcon]')
     deleteImg.element.on('tap', function () {
         !function () {
             var tmp = me.getStore();
             queryInput.setValue('');
             tmp.clearFilter();
             var extraParams = tmp.getProxy().getExtraParams();
             extraParams.listquery = '';
             extraParams.queryfilter = '';
             tmp.getProxy().setExtraParams(extraParams);
             tmp.removeAll();
             if (tmp.Ajax) {
                 tmp.Ajax.abort();
             }
             tmp.loadPage(1);
         }();
     })
     ```

     

   - 搜索按钮事件，从后台根据过滤条件重新取数，而不是在前端store里面过滤

     ``` javascript
     //  搜索按钮事件
     var searchBtn = this.down('button[name=search]')
     searchBtn.element.on('tap', function () {
         !function () {
             var tmp = me.getStore();
             // 获取搜索列表并加载
             if (tmp.getProxy().getUrl()) {
                 var extraParams = tmp.getProxy().getExtraParams();
                 extraParams.listquery = queryInput.getValue();
                 tmp.getProxy().setExtraParams(extraParams);
                 tmp.removeAll();
                 if (tmp.Ajax) {
                     tmp.Ajax.abort();
                 }
                 tmp.loadPage(1);
             }
         }()
     })
     ```

     

   - 高级按钮事件,监听点击事件，并初始化内嵌查询展示界面配置

     ```javascript
     //  高级按钮事件
     var addButton = this.down('button[name=advance]');
     addButton.element.on('tap', function () {
         var helpView = Ext.create('Ext.ng.QueryPanelView', { items:queryInfo,itemData: itemData});
         Ext.Viewport.add(helpView);
         Ext.Viewport.setActiveItem(helpView);
         helpView.on('querySearch', function (result) {
             queryInput.setValue(result.displayValue);
             itemData=result.values;
             !function (me) {
                 var tmp = me.getStore();
                 // 获取搜索列表并加载
                 if (tmp.getProxy().getUrl()) {
                     var extraParams = tmp.getProxy().getExtraParams();
                     extraParams.queryfilter = Ext.JSON.encode(itemData);
                     tmp.getProxy().setExtraParams(extraParams);
                     tmp.removeAll();
                     tmp.loadPage(1);
                     NG.application.onBackKeyDown({},false);
                 }
             }(me)
         });
     });
     ```
     
3. 查询界面初始化

   - 向后端发请求取出初始化内嵌查询控件的UI数据

     ```javascript
      Ext.Ajax.request({
          params: { 'pageid': me.getPageId()},
          url:me.address+"/SUP/QueryPanel/GetIndividualQueryPanelForApp",
          success: function (response) {
              var resp = Ext.JSON.decode(response.responseText);
              queryInfo = me.dealQueryInfo(Ext.decode(resp.list));
          }
      });
     ```

   - queryInfo数据格式

     <a data-fancybox title="MgDNGT.png" href="https://user-gold-cdn.xitu.io/2019/11/19/16e82470d21614f5?w=887&h=670&f=png&s=35492">![MgDNGT.png](https://user-gold-cdn.xitu.io/2019/11/19/16e82470d21614f5?w=887&h=670&f=png&s=35492)</a>

4. 根据queryInfo的数据渲染出控件的查询界面

   <a data-fancybox title="MgrGOH.png" href="https://user-gold-cdn.xitu.io/2019/11/19/16e82470c0ee158c?w=458&h=465&f=png&s=10723">![MgrGOH.png](https://user-gold-cdn.xitu.io/2019/11/19/16e82470c0ee158c?w=458&h=465&f=png&s=10723)</a>

### 查询取值

&emsp;&emsp;用户在输入好自己的过滤条件之后，点击搜索按钮，我会遍历所有的查询子控件，将控件id和值组成和后端约定好的格式，在后端拼接为sql过滤条件，过滤取数。

数据格式：

```javascript
{
  "u_title*str*like*1":"员工查询",
  "u_user*str*eq*1":"265181120000001",
  "u_sex*str*eq*1":"2",
  "fillpsn*str*eq*1":"538191115000001",
  "checkpsn*str*eq*1":"538190305000001"
}
```

## 总结

&emsp;&emsp;在拥有了APP自定义表单和通用帮助的经验之后，内嵌查询这个项目做起来就简单明了多了。这个项目中最复杂的地方就是要和PC端的内嵌查询公用一套UI渲染源数据，以及同一个查询接口，所以在渲染UI和获取数据时，需要将数据拼接为较复杂的格式。
