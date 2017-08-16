var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var livereload = require('gulp-livereload');

// File Paths
var SCRIPTS_PATH = 'public/scripts/**/*.js';


// Styles
gulp.task('styles', function(){
  console.log("Starting styles task...");
});

// Scripts
gulp.task('scripts', function(){
  console.log("Starting scripts task...");
  pump([
        gulp.src(SCRIPTS_PATH),
        uglify(),
        gulp.dest('public/dist'),
        livereload()
    ]
  );
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
})

gulp.task('default', function(){
  console.log("starting default task...");
});