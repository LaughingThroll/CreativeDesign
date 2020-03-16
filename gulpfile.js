const gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-cssmin'),
    del = require('del'),
    pug = require('gulp-pug'),
    webpack = require('webpack-stream'),
    path = require('path');

let isDev = true,
    isProd = !isDev;  
   
const webConfig = {
  entry: {
    index: path.resolve(__dirname, './app/js/index.js'), 
    portfolio__details: path.resolve(__dirname, './app/js/portfolio__details.js'), 
    blog: path.resolve(__dirname, './app/js/blog.js') 
  },
  output: {
    filename: '[name].min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  devtool: isDev ? 'eval-source-map' : 'none',
};    



gulp.task('sass', function(){
    return  gulp.src('app/scss/style.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(rename({suffix : '.min'}))
      .pipe(autoprefixer({overrideBrowserslist: ['last 8 versions']}))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({stream: true}))
});

gulp.task('pug', function(){
    return gulp.src('app/**/*.pug')
      .pipe(pug({
        pretty: true
      }))
      .pipe(gulp.dest('app/'))
      .pipe(browserSync.reload({stream: true}))
});

gulp.task('script', function(){
    return gulp.src('app/js/*.js')
      .pipe(webpack(webConfig))
      .pipe(gulp.dest('app/js'))
      .pipe(browserSync.reload({stream: true}))
});

gulp.task('styleLibs', function(){
    return gulp.src([
      'node_modules/normalize.css/normalize.css',
      'node_modules/glider-js/glider.css',
     
    ])
      .pipe(concat('libs.min.css'))
      .pipe(cssmin())
      .pipe(gulp.dest('app/css'))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('clean', async function(){
    del.sync('dist')
});

gulp.task('export', function () {
    let buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'))
    let buildCss = gulp.src('app/css/**/*.css')
        .pipe(gulp.dest('dist/css'))
    let buildJs = gulp.src('app/js/main.min.js')
        .pipe(gulp.dest('dist/js'))
    let buildFonts = gulp.src('app/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'))
    let buildImages = gulp.src('app/images/**/*.*')
        .pipe(gulp.dest('dist/images'))
});

gulp.task('build', gulp.series('clean', 'export'))

gulp.task('watch', function(){
    gulp.watch('app/**/*.scss', gulp.parallel('sass'))
    gulp.watch('app/**/*.pug', gulp.parallel('pug'))
    gulp.watch(['app/**/*.js', '!app/js/*.min.js'], gulp.parallel('script'))
});

gulp.task('default', gulp.parallel('styleLibs', 'sass', 'watch', 'browser-sync'))