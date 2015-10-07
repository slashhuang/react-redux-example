/**
 * Created by slashhuang on 15/10/5.
 */
var path = require('path');
var webpack = require('webpack');
/**enable hot module replacement=_=_=_=_=
 *  add an entry point to the webpack configuration: webpack/hot/dev-server.
 *  add the new webpack.HotModuleReplacementPlugin() to the webpack configuration.
 *  add hot: true the the webpack-dev-server configuration to enable HMR on the server.
 * @type {{devtool: string, entry: {app: string[]}, output: {path: *, filename: string}, plugins: *[], module: {loaders: *[]}}}
 */

module.exports = {
    devtool: 'eval',
    entry: {
        app:["webpack-dev-server/client?http://localhost:3000","webpack/hot/dev-server",'./index.js']
    },

    output: {
        path: path.join(__dirname, 'dist'),//必须是绝对路径
        filename: 'bundle.js',
        publicPath: "/static/",//调试地址为相对路径,它会观察所有bundle的文件，从此publicPath更新内存中的js文件获取
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()//添加此插件以增加hotmodulereplace功能
    ],

    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot-loader', 'babel-loader'],
            exclude:/node_modules/
        }, {
            test: /\.less$/, // 解析less
            loaders:['less-loader','css-loader','style-loader'] // loaders参数接收数组作为值，而loader则是接收一个以！作为分解符的字符串
        },
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}]
    }
};
