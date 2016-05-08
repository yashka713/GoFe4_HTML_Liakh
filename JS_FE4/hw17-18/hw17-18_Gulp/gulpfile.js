/**
 * Created by Ярик on 08.05.2016.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var cssmin = require('gulp-cssmin');
var rename = require("gulp-rename");
var concatCss = require('gulp-concat-css');

gulp.task('minify', function(){

    //.pipe(rename('all.min.js'))
    //.pipe(gulp.dest('./dist'));
});

// Конкатенация и минификация файлов
gulp.src(['src/js/script.js', 'src/js/jquery.Carousel.js', 'src/js/tmpl.js'])
    .pipe(concat('production.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'));
gulp.src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img/'));
gulp.src('src/**/*.css')
    .pipe(concatCss("css/production.css"))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/'));

// Действия по умолчанию
gulp.task('default', function(){
    gulp.run('minify');

//Отслеживаем изменения в файлах
    gulp.watch("src/*.js", function(event){
        gulp.run('minify');
    });
});
