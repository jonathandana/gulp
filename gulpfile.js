//Tasks.
const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');


//Constants.
const paths_css = './src/sass/**/*.scss';
const dist_plugin_folder = './dist/';

//Sass. 
gulp.task('sass', () => {
    return gulp.src(paths_css)
         .pipe(sourcemaps.init())
         .pipe(sass.sync().on('error', sass.logError))
         .pipe(autoprefixer())
         .pipe(cleanCSS())
         .pipe(sourcemaps.write('./maps'))
         .pipe(gulp.dest(dist_plugin_folder + '/css/'));
});

//Sass watch.
gulp.task('sass:watch', () => {
    return gulp.watch('./src/sass/**/*', ['sass']);
});


gulp.task('default', ['sass']);
gulp.task('watch',['sass','sass:watch']);
