// 引入 gulp
var gulp = require('gulp');

// 引入组件
var jshint = require('gulp-jshint');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

// 检查脚本
gulp.task('lint', function() {
    gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// 合并，压缩文件js
gulp.task('scripts', function() {
    gulp.src('./src/js/*.js')
        .pipe(concat('backtop.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('backtop.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

// 合并，压缩文件css
gulp.task('style', function() {
    gulp.src('./src/style/*.css')
        .pipe(concat('backtop.css'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('backtop.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('./dist'));
});

// 删除
gulp.task('clean', function(){
  del('./dist');
});

// 移动文件夹
gulp.task('copy', function () {
  gulp.src('./src/img/**.*')
      .pipe(gulp.dest('./dist/img'));
});

// 编译
gulp.task('build', function(){
    gulp.run('lint', 'scripts', 'style', 'copy');

    // 监听文件变化
    gulp.watch('./src/js/*.js', function(){
        gulp.run('lint', 'scripts');
    });
});

// 默认任务
gulp.task('default ', function(){
    gulp.run('build');
});

// 静态服务器 + 监听 scss/html 文件
gulp.task('server', ['build'], function() {
    browserSync.init({
        server: "./"
    });
    var reload = browserSync.reload;
    gulp.watch("./src/**.*.*", ['build']).on('change', reload);
});
