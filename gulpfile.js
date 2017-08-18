var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var pump = require('pump');
var livereload = require('gulp-livereload');

// File Paths
var DIST_PATH = 'public/dist';
var SCRIPTS_PATH = 'public/scripts/**/*.js';
var CSS_PATH = 'public/css/**/*.css';


// Styles
gulp.task('styles', function(){
  console.log("Starting styles task...");
  pump([
    gulp.src(['public/css/reset.css', CSS_PATH]),
    concat('styles.css'),
    minifyCss(),
    gulp.dest(DIST_PATH),
    livereload()
  ]);
});

// Scripts
gulp.task('scripts', function(){
  console.log("Starting scripts task...");
  pump([
        gulp.src(SCRIPTS_PATH),
        uglify(),
        gulp.dest(DIST_PATH),
        livereload()
    ]);
});

// Images
gulp.task('images', function(){
  console.log("Starting images task...");
});

gulp.task('watch', function(){
  console.log("Watch task started...");
  require('./server.js');
  livereload.listen(); 
  gulp.watch(SCRIPTS_PATH, ['scripts']);
  gulp.watch(CSS_PATH, ['styles']);
})

gulp.task('default', function(){
  console.log("starting default task...");
});