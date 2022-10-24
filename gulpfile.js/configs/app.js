app = {
	gulp: require('gulp'),
	browserSync: require('browser-sync').create(),
	plumber: require('gulp-plumber'),
	notify: require('gulp-notify'),
	del: require('del'),
	rename: require('gulp-rename'),
	size: require('gulp-size'),
	fileInclude: require('gulp-file-include'),
	htmlmin: require('gulp-htmlmin'),
	sass: require('gulp-sass')(require('sass')),
	cssmin: require('gulp-csso'),
	cleanCss: require('gulp-clean-css'),
	autoprefixer: require('gulp-autoprefixer'),
	groupCssMediaQueries: require('gulp-group-css-media-queries'),
	cssShorthand: require('gulp-shorthand'),
	uglify: require('gulp-uglify'),
	concat: require('gulp-concat'),
	babel: require('gulp-babel'),
	webpack: require('webpack-stream'),
	minify: require('gulp-minify'),
	imagemin: require('gulp-imagemin'),
	newer: require('gulp-newer'),
	webp: require('gulp-webp'),
	webpHtml: require('gulp-webp-html'),
	webpCss: require('gulp-webp-css'),
	fonter: require('gulp-fonter'),
	ttf2woff2: require('gulp-ttf2woff2'),
}


module.exports = app;