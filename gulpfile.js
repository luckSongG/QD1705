const gulp  = require("gulp");

// gulp.task("hello",function(){
//     console.log("hello");
// });
gulp.task("copy-html",() => {
    return gulp.src("html/*.html")
    .pipe(gulp.dest("dist/html"))
    .pipe(connect.reload());
    //吧文件都放copy到dist下
})
//整理文件and真理


//拷贝图片
gulp.task("image",()=> {
    return gulp.src("image/**/*")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})

/*
    将scss文件转成css文件

*/
const scss = require("gulp-sass-china");
const minify = require("gulp-minify-css");
const rename = require("gulp-rename");

gulp.task("scss-index",()=>{
    return gulp.src("scss/particulars.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minify())
    .pipe(rename("particulars.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
//拷贝js文件
gulp.task("scripts",()=>{
    return gulp.src("js/*.js")
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})
//拷贝data文件 整理数据源
gulp.task("data",()=>{
    return gulp.src("data/*.json")
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})
//用一个bulid来控制所有的任务
gulp.task("bulid",["copy-html","image","scripts","data","scss-index"],()=>{
    console.log("编译成功");
})
//创建事件监听器
gulp.task("watch",function(){
    gulp.watch("html/*.html",["copy-html"]);
    gulp.watch("images/**/*",["images"]);
    gulp.watch("js/*.js",["scripts"]);
    gulp.watch("data/*.json",["data"]);
    gulp.watch("scss/*.scss",["scss-index"])
})
//启动一个服务器
var connect = require("gulp-connect");
gulp.task("server",function(){
    connect.server({
        root:"dist",//开启要查找的文件
        port:8888,//改变端口号
        livereload:true //自动刷新
    })
})
//创建一个默认开始任务
gulp.task("default",["watch","server"]);
