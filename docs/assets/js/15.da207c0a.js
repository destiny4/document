(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{374:function(i,t,a){"use strict";a.r(t);var e=a(42),s=Object(e.a)({},(function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[a("h1",{attrs:{id:"fbi-v3-x源码解读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fbi-v3-x源码解读"}},[i._v("#")]),i._v(" "),a("code",[i._v("fbi v3.x")]),i._v("源码解读")]),i._v(" "),a("h2",{attrs:{id:"package-json-bin-bin-fbi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-json-bin-bin-fbi"}},[i._v("#")]),i._v(' package.json > bin "./bin/fbi"')]),i._v(" "),a("p",[i._v("它是一个命令名和本地文件名的映射。在安装时，如果是全局安装，npm将会使用符号链接把这些文件链接到prefix/bin，如果是本地安装，会链接到./node_modules/.bin/。然后使用"),a("code",[i._v("fbi")]),i._v("命令的时候，就会去执行"),a("code",[i._v("./bin/fbi")]),i._v("这个命令文件，一切从这里开始.")]),i._v(" "),a("h2",{attrs:{id:"入口cli-init-args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入口cli-init-args"}},[i._v("#")]),i._v(" 入口"),a("code",[i._v("cli.init(args)")])]),i._v(" "),a("h2",{attrs:{id:"fbi-config-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fbi-config-mode"}},[i._v("#")]),i._v(" "),a("code",[i._v("fbi.config(mode)")])]),i._v(" "),a("ol",[a("li",[i._v("初始化mode (debug, template,global,parallel)")]),i._v(" "),a("li",[i._v("配置fbi的configs")]),i._v(" "),a("li",[i._v("配置logger")]),i._v(" "),a("li",[i._v("获取本地store配置（已经使用"),a("code",[i._v("fbi add")]),i._v("过的模板）")]),i._v(" "),a("li",[i._v("获取用户模板的options")]),i._v(" "),a("li",[i._v("初始化task")]),i._v(" "),a("li",[i._v("初始化template，并用mode，store，stores，configs，options，logger给template赋值")]),i._v(" "),a("li",[i._v("初始化version")]),i._v(" "),a("li",[i._v("监听exit事件，添加错误日志")]),i._v(" "),a("li",[i._v("监听ctrl+c命令，调用进程终止方法"),a("code",[i._v("process.exit()")])])]),i._v(" "),a("h2",{attrs:{id:"判断是否是fbi的命令还是模板的命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断是否是fbi的命令还是模板的命令"}},[i._v("#")]),i._v(" 判断是否是FBI的命令还是模板的命令")]),i._v(" "),a("h3",{attrs:{id:"fbi-add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fbi-add"}},[i._v("#")]),i._v(" fbi.add")]),i._v(" "),a("ol",[a("li",[i._v("template.add")]),i._v(" "),a("li",[i._v("version.add")]),i._v(" "),a("li",[i._v("git.clone")]),i._v(" "),a("li",[i._v("将模板信息存储到本地store配置.fbi/store.json")]),i._v(" "),a("li",[i._v("执行npm install")])])])}),[],!1,null,null,null);t.default=s.exports}}]);