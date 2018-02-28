// npm i
var gulp = require('gulp')
var less = require('gulp-less')
var LessAutoprefix = require('less-plugin-autoprefix')
var autoprefix = new LessAutoprefix( { browsers: ['last 2 versions'] } )
var debug = require('gulp-debug')

var ts = require('gulp-typescript')
var pug  = require('gulp-pug')
var riot =  require('gulp-riot')
var rename = require('gulp-rename')
gulp.task('default', defaultTask)
function defaultTask(done) {
	gulp.start('css', 'html', 'comp', 'js')
	done()
}

//
gulp.task('watch', function(done) {
	gulp.start('css', 'html', 'comp', 'js')
	gulp.watch('./dev/**/*.pug', ['comp', 'css', 'html', 'js'])
	done()
})
//

gulp.task('css', function () {
	return gulp.src('./dev/assets/fr7/framework7.less')
		.pipe( less(
				{ plugins: [autoprefix] }
			))
		.pipe(gulp.dest('./dev/assets/fr7/'))
	})

gulp.task('html', function() {  
	return gulp.src('./dev/**/*.pug')
		.pipe( pug(
			{ pretty: true }
		)) // pipe to pug plugin
		.pipe(gulp.dest('./dev/'))
	})

gulp.task('comp', function() {  
	return gulp.src('./dev/admin/comps/*.pug')
		.pipe( pug(
			{pretty: true }
		)) // pipe to pug plugin
		.pipe( rename({ extname: '.tag'}))
		.pipe( riot( 
			{ } 
		))
		.pipe( rename({ extname: '.js'}))
		.pipe(debug())
		.pipe(gulp.dest('./dev/admin/comps/'))
	})

gulp.task('tag', function() {  
	return gulp.src('./dev/admin/comps/*.pug')
		.pipe( pug(
			{pretty: true }
		)) // pipe to pug plugin
		//.pipe(debug())
		.pipe( rename({ extname: '.tag'}))
		.pipe(gulp.dest('./dev/admin/comps/'))	
	})

gulp.task('js', function () {
	return gulp.src('./dev/**/*.ts')
		.pipe( ts(
			{ }
		))
		.pipe(gulp.dest('./dev/'))
	})