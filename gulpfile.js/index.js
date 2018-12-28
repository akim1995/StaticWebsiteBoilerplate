const env = 'development';
const { series, parallel, src, dest } = require('gulp');
const sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
sass.compiler = require('node-sass');

function sassTask() {
	return src('assets/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(dest('css/'));
}
function javascript(cb) {
	console.log('test');
	cb();
}
if (env === 'development') {
	exports.default = series(sassTask);
	exports.sass = sassTask;
}
if (env === 'production') {
	exports.default = undefined;
}
