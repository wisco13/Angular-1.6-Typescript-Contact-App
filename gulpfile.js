var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var glob = require('glob');
var gutil = require("gulp-util");
var watchify = require("watchify");

var paths = {
    pages: ['src/**/*.html', 'src/*.css', 'src/**/*.json']
};

//var files = glob.sync(['src/**/*.ts');
// var files = [];
// var paths = ['src/**/*.ts', 'src/**/*.html', 'src/**/*.css'];
// files = paths.forEach(function(element) {
//     console.log(element)
//     console.log(files)
//     files.length === 0 ? files = glob.sync(element) : files.concat(glob.sync(element));
// }, this);

// console.log(files);

var files = glob.sync('src/**/*.ts');
var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: [files],
    cache: {},
    packageCache: {}
}).plugin(tsify));

gulp.task('copyHtml', function() {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copyHtml'], bundle);

function bundle() {
    try {
        return watchedBrowserify
            .transform('babelify', {
                presets: ['es2015'],
                extensions: ['.ts']
            })
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('dist'));
    } catch (e) {
        console.log(e)
    }
}

gulp.watch(['src/**/*.scss', 'src/**/*.css', 'src/**/*.html', 'src/**/*.json'], ['default']);
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);