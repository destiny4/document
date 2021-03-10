module.exports = {
  // theme: '@vuepress/blog',
  title: 'KryST4l',
  description: 'sunshine programer',
  head: [
    [
      'script',
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js'
      }
    ],
    [
      'script',
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js'
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css'
      }
    ],
    ['link', { rel: 'icon', href: '/me.png' }]
  ],
  sidebarDepth: 2,
  themeConfig: {
    logo: '/me.jpeg',
    nav: [{ text: '主页', link: '/' }],
    sidebar: [
      {
        title: '项目', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          ['/skyxchen/项目/fbi工作流', 'fbi工作流'],
          ['/skyxchen/项目/平潭深度画像系统', '平潭深度画像系统'],
          ['/skyxchen/项目/腾讯文旅开放平台', '腾讯文旅开放平台'],
          [
            '/skyxchen/项目/App业务表单可视化搭建平台',
            'App业务表单可视化搭建平台'
          ],
          ['/skyxchen/项目/Vue自定义二开表单', 'Vue自定义二开表单'],
          ['/skyxchen/项目/H5自定义表单', 'H5自定义表单'],
          ['/skyxchen/项目/APP内嵌查询', 'APP内嵌查询'],
          ['/skyxchen/项目/费控中心', '费控中心'],
          ['/skyxchen/项目/通用帮助', '通用帮助'],
          ['/skyxchen/项目/时间尺', '时间尺']
        ]
      },
      {
        title: '项目沉淀', // 必要的
        // path: '/foo/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          ['/skyxchen/项目沉淀/CSS相关/CSS技巧', 'CSS技巧'],
          ['/skyxchen/项目沉淀/git/git操作', 'git操作'],
          ['/skyxchen/项目沉淀/docker操作', 'docker操作'],
          ['/skyxchen/项目沉淀/正则表达式', '正则表达式'],
          ['/skyxchen/项目沉淀/ESLint总结', 'ESLint总结'],
          ['/skyxchen/项目沉淀/fbi 3.x源码解读', 'fbi 3.x源码解读'],
          ['/skyxchen/项目沉淀/Flow', 'Flow'],
          ['/skyxchen/项目沉淀/Typescript 总结', 'Typescript 总结'],
          ['/skyxchen/项目沉淀/sed操作文件', 'sed操作文件'],
          [
            '/skyxchen/项目沉淀/history路由模式下的nginx配置',
            'history路由模式下的nginx配置'
          ]
        ]
      },
      {
        title: '前端基础', // 必要的
        // path: '/foo/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          ['/skyxchen/前端基础/浏览器的回流与重绘', '浏览器的回流与重绘'],
          [
            '/skyxchen/前端基础/深入理解前端中的hash和history路由',
            '深入理解前端中的hash和history路由'
          ]
        ]
      },
      {
        title: 'React', // 必要的
        // path: '/foo/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          ['/skyxchen/React/react扩展', 'react扩展'],
          ['/skyxchen/React/react基础', 'react基础']
        ]
      },
      ['/skyxchen/progress', 'progress'],
      ['/skyxchen/markdown格式化工具', 'markdown格式化工具']
    ]
  }
}
