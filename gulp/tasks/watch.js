'use strict'

import gulp from 'gulp'

gulp.task('watch', () => {
  gulp.watch('./assets/**/*.less', ['styles'])
  gulp.watch('./assets/index.html', ['html'])
  gulp.watch('./assets/**/*.jsx', ['webpack'])
  gulp.watch([
    './assets/**/*.jsx',
    './gulp/**/*.js'
  ], ['standard'])
})
