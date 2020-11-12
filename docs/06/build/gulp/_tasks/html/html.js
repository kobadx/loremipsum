import gulp from "gulp";
import uglify from "gulp-uglify";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import concat from 'gulp-concat';
import ejs from "gulp-ejs";
import rename from 'gulp-rename';
import htmlmin from 'gulp-htmlmin';
import htmlhint from 'gulp-htmlhint';
import cache from 'gulp-cached';
import ssi from "gulp-ssi";
import fs from "fs";
import changed from 'gulp-changed';
import stripJsonComments from 'strip-json-comments';
import minimist from 'minimist';
import PATH from '../../_setting/config';

// <!-- ************************************************************
//
// compile
//
// ************************************************************ -->

gulp.task("compileHTML", ()=>{

  // metaData.jsonの読み込み
  var json = PATH.src.ejs + 'inc/metaData.json';
  var data = JSON.parse(stripJsonComments(fs.readFileSync(json, 'utf8')));

  var argv = minimist(process.argv.slice(2));
  
  if (argv.m==undefined) {

    gulp.src([PATH.src.ejs + 'page/**/*.ejs','!' + PATH.src.ejs + 'page/**/_*.ejs','!' + PATH.src.ejs + 'page/_src/**/*.ejs'])
        // .pipe(changed(PATH.src.ejs))
        // .pipe(cache('html'))
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(ejs({data: data},{root:PATH.dist.root}))
        .pipe(rename({extname: '.html'})) //出力ファイル名を指定
        // .pipe(rename({extname: '.php'})) //出力ファイル名を指定
        // .pipe(ssi({root: PATH.root + '../../../'}))
        // .pipe(htmlhint('/.htmlhintrc')) 
        // .pipe(htmlhint.reporter())
        // .pipe(htmlhint.failReporter())
        .pipe(gulp.dest(PATH.dist.root))

  } else {

    gulp.src(PATH.dist.root + '**/*.html')
          .pipe(plumber())
          // .pipe(htmlhint({"tag-pair": true}))
          // .pipe(htmlhint.reporter())
          .pipe(htmlmin({
                collapseWhitespace: true,
                removeComments: true
            })
          )
          .pipe(gulp.dest(PATH.dist.root));

  }

});



// <!-- ************************************************************
//
// minify
//
// ************************************************************ -->

gulp.task("minifyHTML", ()=>{

    gulp.src(PATH.dist.root + '**/*.html')
          .pipe(plumber())
          // .pipe(htmlhint({"tag-pair": true}))
          // .pipe(htmlhint.reporter())
          .pipe(htmlmin({
                collapseWhitespace: true,
                removeComments: true
            })
          )
          .pipe(gulp.dest(PATH.production.root));

});
