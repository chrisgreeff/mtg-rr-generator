'use strict'

import gulp from 'gulp'
import gutil from 'gulp-util'
import webpack from 'webpack'

gulp.task('webpack', (callback) => {
  webpack({
    entry: './assets/scripts/app.jsx',
    output: {
      path: './web/js',
      filename: 'app.js'
    },
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: { presets: ['es2015', 'react'] }
        }
      ]
    }
  }, (err, stats) => {
    if (err) { throw new gutil.PluginError('webpack', err) }

    gutil.log('[webpack]', stats.toString())
    callback()
  })
})
