module.exports = () => {
  // Incremental approach 
  G.gulp.task('pug', function () {
    return G.gulp.src('app/**/*.pug')
      // files which changed 
      .pipe(G.gulpChanged('app/', {extension: '.html'}))
      // if file watching mean woks cach
      .pipe(G.gulpIf(global.isWatching, G.gulpCached('pug')))
      // Rebuild pug file  that have extended or included
      .pipe(G.gulpPugInheritance({basedir: 'app', skip: 'node_modules'}))
      // Filter all files with _
      .pipe(G.gulpFilter(function (file) {
        return !/\/_/.test(file.path) && !/^_/.test(file.relative);
      }))
      // Standart PUG
      .pipe(G.pug({
        pretty: true
      }))
      .pipe(G.gulp.dest('app/'))
      
      .pipe(G.browserSync.reload({stream: true}))
  });
}