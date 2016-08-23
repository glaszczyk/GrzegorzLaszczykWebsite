var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var babel = require("gulp-babel");

gulp.task('sass', function() {
	return gulp.src('./sass/main.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(rename('style.css'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.reload({stream: true}));
});
/*
//Task do ES6
gulp.task("es6", function () {
  return gulp.src("./es6/script_es6.js")
    .pipe(babel())
    .pipe(gulp.dest("./js"));
});
*/
gulp.task("default", ["sass"], function(){
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});

	gulp.watch('./sass/**/*.scss', ['sass']);
	gulp.watch('./index.html', browserSync.reload);
	//Watcher do ES6
	// gulp.watch('./es6/*.js', ['es6']);
});
