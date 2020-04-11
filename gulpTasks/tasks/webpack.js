
module.exports = () => {
  console.log(G.path.resolve(__dirname))
  const PATH = {
    js: G.path.resolve(__dirname, './../../app/js'),
    app: G.path.resolve(__dirname, './../../app')
  }
  const webConfig = {
    entry: {
      main: `${PATH.js}/main.js`,
      index: `${PATH.js}/index.js`,
      portfolio: `${PATH.js}/portfolio.js`,
      portfolio__details: `${PATH.js}/portfolio__details.js`,
      blog: `${PATH.js}/blog.js`,
      contact: `${PATH.js}/contact.js`,
      about: `${PATH.js}/about.js`
    },
    output: {
      filename: '[name].min.js'
    },
    devtool: 'eval-cheap-module-source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: '/node_modules/'
        }
      ]
    },
  };

  G.gulp.task('webpackJs', function () {
    return G.gulp.src('app/js/*.js')
      .pipe(G.webpack(webConfig))
      .pipe(G.gulp.dest('app/js'))
      .pipe(G.browserSync.reload({ stream: true }))
  });
}
