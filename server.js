/**
 * Created by slashhuang on 15/10/5.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var compiler = webpack(config);

module.exports= server = function(){
    /**
     * hot参数enable了dev-server的热刷新模式
     */
    new WebpackDevServer(compiler, {
        publicPath: config.output.publicPath||__dirname,
        hot: true,
        historyApiFallback: true
    }).listen(3000, 'localhost', function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log('Listening at localhost:3000');
    });
};


