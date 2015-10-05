# redux和react混合高级教程
    这个repo是结合官网的例子，自己添加webpack-dev-server和gulp插件写的
    可以fork我写的这个example自己学习，里面有比较多的细节，还是得自己多看官方文档

## [个人主页](http://120.26.69.71)
## [联系作者](http://wpa.qq.com/msgrd?v=3&uin=627284482&site=qq&menu=yes)

#### 使用
``` bash
  npm install
```
### 项目学习内容介绍
* react-hot-loader配置的三种方法

    * 先说明一点 ： **``` ["webpack/hot/dev-server",'你的入口文件']```配合react必须要加的**
    * inline 模式，定义scrip.src= **webpack.config.entry.publicPath** bundle.js 即可
    * iframe 模式，打开页面 ``` url=“http://localhost:" +"端口号"+"/webpack-dev-server/index.html” ```
    * 直接模式，在webpack.config里面的entry入口定义
         ```  ["webpack-dev-server/client?http://localhost:3000","webpack/hot/dev-server",'你的入口文件']```
         
* webpack&&webpack-dev-server参数配置：进我的个人主页，搜索webpack即可

    * module.loaders是webpack解析所有js文件的关键，一个技巧是把所有node_modules都放在exclude里面
    * webpack.HotModuleReplacementPlugin() 这个插件在react开发中也要放进去，配合dev-server可以为项目添加自动刷新dom功能
    * output.publicPath 这个字段是相对路径，一般在调试时使用，在react dom刷新的时候取的js来自publicPath【这个js地址在内存中优先于path对应的bundle】
* 目录说明
    * components为木偶组件
        * 和redux基本没啥关系，通过实例的props做出相应动作
    * containers为智能组件
        * (与redux进行交互)
* index.html的script标签
    * 存在开发模式和上线模式，因需加载，我已经说明。

## redux在应用中的说明

这个等我先去吃个饭再说。。。[2015.10.05]

