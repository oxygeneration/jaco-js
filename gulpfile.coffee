gulp = require 'gulp'
wpGilp = require 'webpack-stream'
webpack = require 'webpack'
ts = require 'gulp-typescript'
docs = require 'gulp-typedoc'
babel = require 'gulp-babel'
uglify = require 'gulp-uglify'
rename = require 'gulp-rename'
header = require 'gulp-header'
moment = require 'moment'
runSequence = require 'run-sequence'
git = require 'git-rev-sync'

pkg = require './package.json'
banner = """/**!
  * <%= pkg.name %> - v<%= pkg.version %>
  * revision: <%= git.long() %>
  * update: <%= moment().format("YYYY-MM-DD") %>
  * Author: <%= pkg.author %> [<%= pkg.website %>]
  * Github: <%= pkg.repository.url %>
  * License: Licensed under the <%= pkg.license %> License
  */


"""

gulp.task 'ts', ->
  tsfiles = gulp.src('src/**/*.ts').pipe(ts('tsconfig.json'))
  tsfiles.js.pipe(babel()).pipe(gulp.dest('./lib/'))
  tsfiles.dts.pipe(gulp.dest('./lib/'))

gulp.task 'pack', ->
  gulp.src './lib/index.js'
    .pipe wpGilp
      plugins: [
        new webpack.optimize.AggressiveMergingPlugin()
      ]
      output: filename: 'jaco.js'
      # module:
      #   loaders: [
      #     {
      #       test: /\.js$/
      #       exclude: /node_modules/
      #       loader: 'babel-loader'
      #     }
      #   ]
    ,
      webpack
    .pipe header banner, pkg: pkg, moment: moment, git: git
    .pipe gulp.dest './dist/'
    .pipe gulp.dest "./dist/v#{pkg.version}/"

gulp.task 'compress', ->
  gulp.src './dist/jaco.js'
    .pipe uglify()
    .pipe rename 'jaco.min.js'
    .pipe header banner, pkg: pkg, moment: moment, git: git
    .pipe gulp.dest './dist/'
    .pipe gulp.dest "./dist/v#{pkg.version}/"

gulp.task 'docs', ->
  gulp.src 'src/jaco.ts'
    .pipe docs
      module: 'commonjs'
      target: 'es2017'
      mode: 'file'
      # out: 'docs'
      # includeDeclarations: true
      json: './api.json'
      exclude: 'node_modules'
    .pipe gulp.dest './docs/'

gulp.task 'dev-ts', (cb) -> runSequence(
  'ts',
  cb
)

gulp.task 'dev-web', (cb) -> runSequence(
  'ts',
  'pack',
  cb
)

gulp.task 'watch', ->
  gulp.watch 'src/**/*.ts', ['dev-web']

gulp.task 'build', (cb) -> runSequence(
  'ts',
  'pack',
  'compress',
  cb
)

gulp.task 'default', (cb) -> runSequence(
  'build',
  cb
)
