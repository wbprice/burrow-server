'use strict'

const gulp = require('gulp')
const babel = require('gulp-babel')
const sass = require('gulp-sass')
const imagemin = require('gulp-imagemin')

module.exports = {

  defaultTaskName: 'default',

  tasks: {
    default: ['compileTemplate', 'compileStyles', 'image'],
    compileTemplate: () => {
      return gulp.src('./assets/js/**/*.js')
        .pipe(babel({
          presets: ['react', 'es2015']
        }))
        .pipe(gulp.dest('dist'))
    },
    compileStyles: () => {
      return gulp.src('./assets/styles/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'))
    },
    image: () => {
      return gulp.src('./assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
    }
  }

}
