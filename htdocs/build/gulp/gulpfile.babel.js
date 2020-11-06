import gulp from 'gulp';
import runSequence from 'run-sequence';
import PATH from './_setting/config';
import requireDir from 'require-dir';
import browserSync from 'browser-sync';
var reload = browserSync.reload;
requireDir('./_tasks',{recurse: true});

//--------------------------------------------------
//
//  watch
//
//--------------------------------------------------

gulp.task('watch', ()=>{

    // build watch
    gulp.watch([PATH.src.root + '**/*.ejs',PATH.dist.resource + '**/*.svg'],['compileHTML']);
    gulp.watch( PATH.src.css + '**/*.scss',['compileSCSS']);
    gulp.watch([
      PATH.src.js + '**/*.js',
      PATH.src.js + '**/*.es6',
      PATH.src.js + '**/*.json',
      PATH.src.js + '**/*.vs',
      PATH.src.js + '**/*.fs',
    ],['bundleJS']);
    // gulp.watch([PATH.src.js + '**/*.js', PATH.src.js + '**/*.es6', PATH.src.js + '**/*.json'],['webpack']);

    // reload watch
    gulp.watch(PATH.dist.css + '**/*.css').on('change', reload);
    gulp.watch(PATH.dist.root + '**/*.html').on('change', reload);
    gulp.watch(PATH.dist.js + '**/*.js').on('change', reload);
    
});

//--------------------------------------------------
//
//  default
//
//--------------------------------------------------

gulp.task('default', [
                        'watch',
                        'compileHTML',
                        'compileSCSS',
                        'concatJSLibs','bundleJS',
                        'browserDist'
                    ]);

//--------------------------------------------------
//
//  pucblish
//
//--------------------------------------------------

gulp.task('publish', (callback)=>{

  return runSequence(
    'clean',
    ['compileHTML','compileSCSS','concatJSLibs'],
    ['minifyHTML','minifyCSS','minifyJS'],
    ['copyResource'],
    // ['minifyIMG'],
    callback
  );
  // return runSequence(
  //   'copy',
  //   callback
  // );

});