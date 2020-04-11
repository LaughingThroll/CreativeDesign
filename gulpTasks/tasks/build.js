module.exports = () => {
  G.gulp.task('clean', async function () {
    G.del.sync('dist')
  });
  
  G.gulp.task('export', function () {
    let buildHtml = G.gulp.src('app/*.html')
      .pipe(G.gulp.dest('dist'))
    let buildCss = G.gulp.src('app/css/**/*.css')
      .pipe(G.gulp.dest('dist/css'))
    let buildJs = G.gulp.src('app/js/*.min.js')
      .pipe(G.gulp.dest('dist/js'))
    let buildFonts = G.gulp.src('app/fonts/**/*.*')
      .pipe(G.gulp.dest('dist/fonts'))
    let buildImages = G.gulp.src('app/images/**/*.*')
      .pipe(G.gulp.dest('dist/images'))
  });
  
  G.gulp.task('build', G.gulp.series('clean', 'export'))
}