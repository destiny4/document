## 总领

polyfill广义上讲是为环境提供不支持的特性的一类文件或库，既有Babel官方的库，也有第三方的。babel-polyfill指的是Babel官方的polyfill，本教程默认使用babel-polyfill。polyfill传统上分两类，一类是已构建成JS文件的polyfill.js，另一类是未构建的需要安装npm包@babel/polyfill。因为@babel/polyfill本质是由两个npm包core-js与regenerator-runtime组合而成的，所以在使用层面上还可以再细分为是引入@babel/polyfill本身还是其组合子包。

> 总体来说，Babel官方的polyfill使用方法主要有如下几种：

1. 直接在html文件引入Babel官方的polyfill.js脚本文件；
2. 在前端工程的入口文件里引入polyfill.js；
3. 在前端工程的入口文件里引入@babel/polyfill；
4. 在前端工程的入口文件里引入core-js/stable与regenerator-runtime/runtime；
5. 在前端工程构建工具的配置文件入口项引入polyfill.js；
6. 在前端工程构建工具的配置文件入口项引入@babel/polyfill；
7. 在前端工程构建工具的配置文件入口项引入core-js/stable与regenerator-runtime/runtime；

