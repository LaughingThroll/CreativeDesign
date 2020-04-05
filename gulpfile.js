// TODO optimization GULP and WEBPACK split file on different files 

global.G = {
  gulp: require('gulp'),
  sass: require('gulp-sass'),
  rename: require('gulp-rename'),
  browserSync: require('browser-sync'),
  autoprefixer: require('gulp-autoprefixer'),
  concat: require('gulp-concat'),
  sourcemaps: require('gulp-sourcemaps'),
  cssmin: require('gulp-cssmin'),
  del: require('del'),
  pug: require('gulp-pug'),
  webpack: require('webpack-stream'),
  path: require('path'),
  gulpLoadPlugins: require('gulp-load-plugins'),
  config: {
    src: require('./gulpTasks/config/src')
  },
  gulpCached: require('gulp-cached'),
  gulpIf: require('gulp-if'),
  gulpFilter: require('gulp-filter'),
  gulpPugInheritance: require('gulp-pug-inheritance'),
  // gulpNewer: require('gulp-newer'),
  gulpChanged: require('gulp-changed')
}

G.config.src.forEach(task => {
  require(task)()
});


G.gulp.task('default', G.gulp.parallel('styleLibs', 'sass', 'watch', 'browser-sync'))