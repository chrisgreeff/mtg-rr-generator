'use strict'

import gulp from 'gulp'
import runSequence from 'run-sequence'

gulp.task('build', () => {
  return runSequence(['fonts', 'html', 'styles', 'webpack'])
})
