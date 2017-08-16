var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');

// Styles
gulp.task('styles', function(){
  console.log("Starting styles task...");
});

// Scripts
gulp.task('scripts', function(){
  console.log("Starting scripts task...");
  pump([
        gulp.src('public/scripts/*.js'),
        uglify(),
        gulp.dest('public/dist')
    ]
  );
});

// Images
gulp.task('images', function(){
  console.log("Starting images task...");
});

gulp.task('default', function(){
  console.log("starting default task...");
});