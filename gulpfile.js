/**
 * Created by slashhuang on 15/10/5.
 */

var gulp=require('gulp');
var open=require('gulp-open');
var server=require('./server')

gulp.task('dev',function(){
    /**
     *dev环境下调试使用
     *有多重模式：
     *  1.如下用webpack-dev-server路径（iframe模式）
     *  2.配置config.output.publicPath
     *  3.在entry中配置client参数
     *        "webpack-dev-server/client?http://localhost:3000",
     * 注意！！！ index.html中引用js必须用虚拟dom对应的publicpath(文档中说是在内存中的)
     *
     * 现在的开发选用第一中模式
     *
     */
    server();//加载dev-server
    gulp.src(__dirname).pipe(
        open({
            'uri':"http://localhost:3000/webpack-dev-server/index.html"
        })
    )
});
gulp.task('default',function(){
    server();//加载dev-server
    gulp.src(__dirname).pipe(
        open({
            'uri':"http://localhost:3000/index.html"
        })
    )
});