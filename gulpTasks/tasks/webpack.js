// let isDev = true,
//     isProd = !isDev;  
module.exports = () => {
  const webConfig = {
    entry: {
      main: G.path.resolve(__dirname, './app/js/main.js'),
      index: G.path.resolve(__dirname, './app/js/index.js'),
      portfolio: G.path.resolve(__dirname, './app/js/portfolio.js'),
      portfolio__details: G.path.resolve(__dirname, './app/js/portfolio__details.js'),
      blog: G.path.resolve(__dirname, './app/js/blog.js'),
      contact: G.path.resolve(__dirname, './app/js/contact.js')
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
    // TODO set settigs and connect in files
    optimization: {
      splitChunks: {
        // include all types of chunks
        chunks: 'all'
      }
    },
    // devtool: isDev ? 'eval-source-map' : 'none',
  };

  G.gulp.task('webpackJs', function () {
    return G.gulp.src('app/js/*.js')
      .pipe(G.webpack(webConfig))
      .pipe(G.gulp.dest('app/js'))
      .pipe(G.browserSync.reload({ stream: true }))
  });
}
