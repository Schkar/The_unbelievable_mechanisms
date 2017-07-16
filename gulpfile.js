var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('scss', function() {
    return gulp.src('scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass ({
            errLogConsole: true,
            outputStyle: 'nested',
            sourceComments: false,
        }).on("error", sass.logError))
		.pipe(autoprefixer({
				browsers:  [
					'last 3 chrome versions',
					'last 3 firefox versions',
					'last 3 opera versions',
					'last 3 safari versions',
					'last 3 ios versions',
					'android >= 4.0',
					'ie >= 10' 	// change to `last 3 ie versions` after IE12  release.
				]
			}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('css'))
})


gulp.task('default', ['scss'], function() {
    gulp.watch('scss/main.scss', ['scss'])
});
