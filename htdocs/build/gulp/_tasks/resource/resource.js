import gulp from "gulp";
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import jpegoptim from 'imagemin-jpegoptim';
import plumber from "gulp-plumber";
import cache from 'gulp-cached';
import changed from 'gulp-changed';
import newer from 'gulp-newer';
import PATH from '../../_setting/config';

// <!-- ************************************************************
//
// minify jpg|jpeg|png|gif|svg
//
// ************************************************************ -->

gulp.task('minifyIMG', ()=>{

  var opt = [
    imagemin.gifsicle({interlaced: true}),
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({plugins: [{removeViewBox: false}]})
  ];

  process.setMaxListeners(0);

  gulp.src(PATH.dist.resource + '**/*.+(jpg|jpeg|png|gif|svg)')
    // .pipe(changed(PATH.production.resource))
    // .pipe(cache('img_log'))
    .pipe(plumber())
    .pipe(imagemin(opt))
    // .pipe(imagemin())
    .pipe(gulp.dest(PATH.production.resource));

});

// <!-- ************************************************************
//
// copy
//
// ************************************************************ -->

gulp.task('copyResource', ()=>{

    gulp
      .src([PATH.dist.resource + '**/*'])
      .pipe(changed(PATH.production.resource))
      // .pipe(gulp.dest('../../../figaro/htdocs/brand-special/tiffany/'));
      .pipe(gulp.dest(PATH.production.resource));

});

