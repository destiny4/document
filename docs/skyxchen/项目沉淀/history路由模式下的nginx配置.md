
## 路由模式

众所周知，浏览器下的单页面应用的路由模式有下面两种： hash 模式和 history 模式。hash 模式通用性好，而且不依赖服务器的配置，省心省力，但是缺点是不够优雅。相比于 hash 模式来说，history 模式则更加美观。

但是，history 模式同样会有一个问题，就是当页面刷新时，如果没有合适的配置，会出现页面 404 的错误。因此需要额外的服务器配置，对于找不到的 url，将首页 html 返回。

接下来，咱们以 nginx 为例，来说说 history 模式时需要进行的配置。

### location

location 位于 http->server 块中，语法格式如下：

> Syntax: location [= | ~ | ~* | ^~] uri { ... }
> location @name { ... }
> Default: —
> Context: server, location

[= | ~ | ~* | ^~]，是修饰符，可以控制 nginx 匹配的顺序。优先级关于四个修饰符的含义，可以参考 [这篇文章](https://www.cnblogs.com/xiaoliangup/p/9175932.html)。这里不过多叙述，总之当一个 server 下面有多个 location 时，nginx 会根据 uri 的精确度和修饰符进行匹配。查找的顺序及优先级如下：

查找顺序和优先级
1：带有“=“的精确匹配优先
2：没有修饰符的, 谁更精确谁优先，如 / 和 /post , 则 post 优先
3：正则表达式按照他们在配置文件中定义的顺序
4：带有 “^~” 修饰符的，开头匹配
5：带有“~” 或“~*” 修饰符的，如果正则表达式与 URI 匹配
6：没有修饰符的，如果指定字符串与 URI 开头匹配

### try_files

try_files 解决的是：当 nginx 找不到客户端需要的资源时该怎么办的问题。以 history 路由为例：假如你的页面 url 是 `http://www.example.com/post`，你的 nginx 配置如下：

```
location  / {
     root local/web/dist
}
```

当你在 post 路由下刷新页面时，nginx 会返回 404。这是什么原因呢？因为我们没有告诉nginx找不到某个文件时该怎么做。root 指定了 / 对应的单页静态资源目录，从而使url映射到dist目录下。
![uploading-image-378943.png](https://img2018.cnblogs.com/blog/1016471/201910/1016471-20191019212949837-1367967265.png)

这个配置可以让你项目的 css，js 被顺利加载，但是碰到上面的 URL，nginx 就不知所措了。因为我们的 dist 文件夹下面并没有 post 这个文件或者文件夹，所以 nginx 会给你个 404 页面。try_files 就是为了解决这个问题的，try_files 语法如下：

```
location / {
    try_files $uri $uri/ /index.html;
}
```

以上面的 `http://www.example.com/post` 为例，$uri 会匹配到 `post`，nginx 发现 dist 目录下下面没有 post 这个文件，也没有 post 这个文件夹，所以最后会返回 dist 目录下的 index.html。这样，index.html 被浏览器加载之后，前端路由就会工作，将用户需要的资源加载出来。而我们 build 出来的 css，js 文件，由于可以被 nginx 正确找到，则不会受到影响。


