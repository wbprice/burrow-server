'use strict'

const gulp = require('gulp')
const babel = require('gulp-babel')
const sass = require('gulp-sass')
const imagemin = require('gulp-imagemin')

const babelConfig = {
  presets: ['react', 'es2015'],
  plugins: [
    [
      'css-modules-transform', {
        preprocessCss: 'preprocessor.js',
        generateScopedName: '[name]__[local]___[hash:base64:5]',
        extensions: ['.css', '.scss'],
        extractCss: './dist/styles/production.css'
      }
    ]
  ]
}

module.exports = {

  defaultTaskName: 'default',

  tasks: {
    default: ['compileTemplate', 'compileStyles', 'image'],
    compileTemplate: () => {
      return gulp.src('./assets/js/**/*.js')
        .pipe(babel(babelConfig))
        .pipe(gulp.dest('dist'))
    },
    compileStyles: () => {
      return gulp.src('./assets/styles/**/*.scss')
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
