import gulp from "gulp";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import es2015 from 'babel-preset-es2015';
import webpack from 'webpack-stream';
// import webpack from 'gulp-webpack';
import strip_debug from 'gulp-strip-debug';
import sourcemaps from "gulp-sourcemaps";
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import minimist from 'minimist';
import rename from 'gulp-rename';
import PATH from '../../_setting/config';

gulp.task('webpack', ()=>{

  return  gulp
            // .src(PATH.src.devjs + 'src/es6/main.js')
            .src(PATH.src.js + 'src/**/*.js')
            .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
            .pipe(webpack(require('../../_setting/webpack.config.js')))
            // .pipe(gulp.dest(PATH.dist.js))
            .pipe(gulp.dest(PATH.dist.js + 'unconcat/'))
    
  // gulp
  //   .src(PATH.src.devjs + 'src/**/*.js')
  //   .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
  //   .pipe(webpack(require('../../webpackCommon._config.js')))
  //   .pipe(gulp.dest(PATH.dist.js + 'common/'));

});

// ------------------------------------------------------------
// build.js / concat libs.js and main.js
// ------------------------------------------------------------
gulp.task('bundleJS', ['webpack'], ()=>{

    var argv = minimist(process.argv.slice(2));

    var src = [
                  PATH.dist.js + 'unconcat/libs.js',
                  PATH.dist.js + 'unconcat/main.js',
              ]

    if (argv.m==undefined) {

      gulp.src(src)
          .pipe(plumber())
          // .pipe(babel({presets: [es2015]}))
          .pipe(concat('bundle.js'))
          // .pipe(uglify({preserveComments : 'some'}))
          .pipe(rename('bundle.js')) //出力ファイル名を指定
          .pipe(gulp.dest(PATH.dist.js))

    } else {

      gulp.src(src)
          .pipe(plumber())
          // .pipe(babel({presets: [es2015]}))
          .pipe(concat('bundle.js'))
          .pipe(strip_debug())
          .pipe(uglify({preserveComments : 'some'}))
          .pipe(gulp.dest(PATH.dist.js))

    }

});