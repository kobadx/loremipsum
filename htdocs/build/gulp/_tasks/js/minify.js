import gulp from "gulp";
import plumber from "gulp-plumber";
import strip_debug from 'gulp-strip-debug';
import uglify from 'gulp-uglify';
import changed from 'gulp-changed';
import concat from 'gulp-concat';
import PATH from '../../_setting/config';

gulp.task('minifyJS', ()=>{

  return gulp.src([PATH.dist.js + '*.js','!' + PATH.dist.js + '_devjs//**/*'])
          .pipe(strip_debug())
          .pipe(uglify({preserveComments : 'some'})) //preserveComments: 'some'
          .pipe(gulp.dest(PATH.production.js));

});

// ------------------------------------------------------------
// build.js / concat libs.js and main.js
// ------------------------------------------------------------
// gulp.task('bundleJS', ['minifyJS'], ()=>{

//     var src = [
//                   PATH.production.js + 'uncompressed/common/libs.js',
//                   PATH.production.js + 'uncompressed/main.js',
//               ]

//     gulp.src(src)
//         .pipe(plumber())
//         // .pipe(babel({presets: [es2015]}))
//         .pipe(concat('bundle.js'))
//         .pipe(gulp.dest(PATH.production.js));

// });