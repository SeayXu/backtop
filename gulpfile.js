// 引入 gulp
var gulp = require('gulp');

// 引入组件
var jshint = require('gulp-jshint');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');
var bs = require('browser-sync').create();
var reload = bs.reload;

// 检查脚本
gulp.task('lint', function() {
    gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// 合并，压缩文件js
gulp.task('scripts', function() {
    gulp.src('./src/js/backtop.js')
        .pipe(gulp.dest('./dist/js'))
        .pipe(rename('backtop.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(reload({stream: true}));
});

// 合并，压缩文件css
gulp.task('style', function() {
    gulp.src('./src/style/backtop.css')
        .pipe(gulp.dest('./dist/style'))
        .pipe(rename('backtop.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('./dist/style'))
        .pipe(reload({stream: true}));

    gulp.src('./src/style/linearicons-free.css')
        .pipe(gulp.dest('./dist/style'))
        .pipe(rename('linearicons-free.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('./dist/style'))
        .pipe(reload({stream: true}));
});

// html输出
gulp.task('html', function() {
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'))
        .pipe(reload({stream: true}));
});

// 删除
gulp.task('clean', function(){
  del('./dist');
});

// 移动文件夹
gulp.task('copy', function () {
  gulp.src('./src/fonts/**.*')
      .pipe(gulp.dest('./dist/fonts'));
  gulp.src('./src/*.html')
      .pipe(gulp.dest('./dist/'));
});

// 编译
gulp.task('build', ['clean'], function(){
    gulp.run('lint', 'scripts', 'style', 'html', 'copy');
});

// 默认任务
gulp.task('default', ['build'], function(){
    gulp.run('server');
});

// 静态服务器 + 监听 scss/html 文件
gulp.task('server', function() {
    bs.init({
        server: "./"
    });
    // 监听文件变化
    gulp.watch('./src/js/*.js', function(){
        gulp.run('lint', 'scripts');
    });
    gulp.watch('./src/style/*.css', function(){
        gulp.run('style');
    });
    gulp.watch("./**.html", function(){
        gulp.run('html');
    });
});
