module.exports = () => {
  G.gulp.task('sass', function () {
    return G.gulp.src('app/scss/style.scss')
      .pipe(G.sourcemaps.init())
      .pipe(G.sass({ outputStyle: 'compressed' }))
      .pipe(G.rename({ suffix: '.min' }))
      .pipe(G.autoprefixer({ overrideBrowserslist: ['last 8 versions'] }))
      .pipe(G.sourcemaps.write('./'))
      .pipe(G.gulp.dest('app/css'))
      .pipe(G.browserSync.reload({ stream: true }))
  });
}

