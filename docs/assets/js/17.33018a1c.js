(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{370:function(a,t,s){"use strict";s.r(t);var e=s(42),c=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"使用补丁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用补丁"}},[a._v("#")]),a._v(" 使用补丁")]),a._v(" "),s("h3",{attrs:{id:"patch-和-diff-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#patch-和-diff-的区别"}},[a._v("#")]),a._v(" patch 和 diff 的区别")]),a._v(" "),s("blockquote",[s("p",[s("code",[a._v("Git")]),a._v(" 提供了两种补丁方案，一是用 "),s("code",[a._v("git diff")]),a._v(" 生成的 "),s("code",[a._v("UNIX")]),a._v(" 标准补丁 "),s("code",[a._v(".diff")]),a._v(" 文件，二是 "),s("code",[a._v("git format-patch")]),a._v(" 生成的 "),s("code",[a._v("Git")]),a._v(" 专用 "),s("code",[a._v(".patch")]),a._v(" 文件")])]),a._v(" "),s("ul",[s("li",[s("code",[a._v(".diff")]),a._v(" 文件只是记录文件改变的内容，不带有 "),s("code",[a._v("commit")]),a._v(" 记录信息,多个 "),s("code",[a._v("commit")]),a._v(" 可以合并成一个 "),s("code",[a._v("diff")]),a._v(" 文件")]),a._v(" "),s("li",[s("code",[a._v(".patch")]),a._v(" 文件带有记录文件改变的内容，也带有 "),s("code",[a._v("commit")]),a._v(" 记录信息,每个 "),s("code",[a._v("commit")]),a._v(" 对应一个 "),s("code",[a._v("patch")]),a._v(" 文件。")])]),a._v(" "),s("blockquote",[s("p",[a._v("在 "),s("code",[a._v("Git")]),a._v(" 下，我们可以使用 "),s("code",[a._v(".diff")]),a._v(" 文件也可以使用 "),s("code",[a._v(".patch")]),a._v(" 文件来打补丁，主要应用场景有： "),s("code",[a._v("CodeReview")]),a._v(" 、代码迁移等。")])]),a._v(" "),s("h3",{attrs:{id:"创建-patch-和-diff"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-patch-和-diff"}},[a._v("#")]),a._v(" 创建 patch 和 diff")]),a._v(" "),s("blockquote",[s("p",[a._v("获取 "),s("code",[a._v("git commit")]),a._v(" 的 "),s("code",[a._v("sha1 id")])])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" log\n")])])]),s("h4",{attrs:{id:"创建-patch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-patch"}},[a._v("#")]),a._v(" 创建 patch")]),a._v(" "),s("ol",[s("li",[a._v("某次提交（含）之"),s("strong",[a._v("前")]),a._v("的几次提交")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" format-patch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("commit的sha1 id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" -n\n")])])]),s("p",[s("code",[a._v("eg")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" format-patch ece801f2707eac3c77cc00a7af35fd4556a02e53 -3\n")])])]),s("p",[a._v("将会创建包含对应 "),s("code",[a._v("id")]),a._v(" 在内之前的三个 "),s("code",[a._v("patch")])]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[a._v("某两次提交之间的所有 "),s("code",[a._v("patch:")])])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" format-patch 9a2998f11dc25cabf335507d9ce5b57a831198af"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("ece801f2707eac3c77cc00a7af35fd4556a02e53\n")])])]),s("h4",{attrs:{id:"创建-diff"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-diff"}},[a._v("#")]),a._v(" 创建 diff")]),a._v(" "),s("ol",[s("li",[a._v("根据 "),s("code",[a._v("id")]),a._v(" 创建 "),s("code",[a._v("diff")])])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("diff")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("commit的 sha1 id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" filename.diff\n")])])]),s("blockquote",[s("p",[a._v("可以有多个 "),s("code",[a._v("id")]),a._v(" ，用空格隔开")])]),a._v(" "),s("p",[s("code",[a._v("eg")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("diff")]),a._v(" 3e91c27840fe09982c9d53f9d927d6d80b9bbc10 a9f6a38a6d7f55b8d7ea9caac6e9550c01c88b51 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" new.diff\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("创建两个提交记录之间的 "),s("code",[a._v("diff")])])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("diff")]),a._v(" 3e91c27840fe09982c9d53f9d927d6d80b9bbc10"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("a9f6a38a6d7f55b8d7ea9caac6e9550c01c88b51 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" new.diff\n")])])]),s("blockquote",[s("p",[a._v("和上面的区别就是这个操作会创建两个 "),s("code",[a._v("id")]),a._v(" 之间的 "),s("code",[a._v("diff")])])]),a._v(" "),s("h3",{attrs:{id:"应用-patch-和-diff"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用-patch-和-diff"}},[a._v("#")]),a._v(" 应用 patch 和 diff")]),a._v(" "),s("ol",[s("li",[a._v("检查补丁是否能用（因为补丁文件可能会和现有文件有冲突）")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" apply --check filename."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("diff/patch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("应用补丁")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("am/apply"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" filename."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("diff/patch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h3",{attrs:{id:"冲突解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#冲突解决"}},[a._v("#")]),a._v(" 冲突解决")]),a._v(" "),s("p",[a._v("在打补丁过程中有时候会出现冲突的情况，有冲突时会打入失败")]),a._v(" "),s("p",[a._v("此时需要解决冲突")]),a._v(" "),s("ol",[s("li",[a._v("首先使用 以下命令行，自动合入 "),s("code",[a._v("patch")]),a._v(" 中不冲突的代码改动，同时保留冲突的部分：")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v("  apply --reject  xxxx.patch\n")])])]),s("p",[a._v("在终端中会显示出冲突的大致代码")]),a._v(" "),s("p",[a._v("同时会生成后缀为 "),s("code",[a._v(".rej")]),a._v(" 的文件，保存没有合并进去的部分的内容，可以参考这个进行冲突解决。")]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[a._v("解决完冲突后删除后缀为 "),s("code",[a._v(".rej")]),a._v(" 的文件，并执行"),s("code",[a._v("git add.")]),a._v("添加改动到暂存区.")]),a._v(" "),s("li",[a._v("接着执行"),s("code",[a._v("git am --resolved")]),a._v("或者"),s("code",[a._v("git am --continue")])])]),a._v(" "),s("blockquote",[s("p",[a._v("在打入 "),s("code",[a._v("patch")]),a._v(" 冲突时，可以执行"),s("code",[a._v("git am --skip")]),a._v("跳过此次冲突，也可以执行"),s("code",[a._v("git am --abort")]),a._v("回退打入 "),s("code",[a._v("patch")]),a._v(" 的动作，还原到操作前的状态。")])])])}),[],!1,null,null,null);t.default=c.exports}}]);