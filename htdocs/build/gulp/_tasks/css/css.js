import gulp from "gulp";
import sass from "gulp-sass";
import minifyCSS from 'gulp-minify-css';
import sourcemaps from 'gulp-sourcemaps';
import csscomb from 'gulp-csscomb';
import uglify from "gulp-uglify";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
// import styledocco from 'gulp-styledocco';
import autoprefixer from "gulp-autoprefixer";
import scsslint from 'gulp-scss-lint';
import cache from 'gulp-cached';
// import remember from 'gulp-remember';
import sassGlob from 'gulp-sass-glob';
import gulpif from 'gulp-if';
import minimist from 'minimist';
import rename from 'gulp-rename';
import PATH from '../../_setting/config';

// <!-- ************************************************************
//
// complile
//
// ************************************************************ -->

gulp.task("compileSCSS", ()=>{

    var argv = minimist(process.argv.slice(2));
    
    if (argv.m==undefined) {

        // gulp.src([PATH.src.css + '**/*.scss','!' + PATH.src.css + '**/!*.scss','!' + PATH.src.css + '_parts/**/*.scss'])
        gulp.src([PATH.src.css + 'style.scss'])
            // .pipe(cache('scss'))
            .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
            // .pipe(scsslint({'maxBuffer': 100000,'_config':'.scsslint.yml'}))
            // .pipe(scsslint.failReporter())
            .pipe(sassGlob())
            .pipe(sass({outputStyle : 'expanded'}))
            // .pipe(autoprefixer('last 2 version'))
            .pipe(autoprefixer({browsers: ['last 3 versions','iOS 7'],cascade: true}))
            .pipe(csscomb())
            .pipe(rename('style.css')) //出力ファイル名を指定
            .pipe(gulp.dest(PATH.dist.css))

    } else {
        
        gulp.src(PATH.dist.css + '**/*.css')
          .pipe(plumber())
          .pipe(minifyCSS())
          .pipe(gulp.dest(PATH.dist.css));     
             
    }

});

// <!-- ************************************************************
//
// minify
//
// ************************************************************ -->

gulp.task("minifyCSS", ()=>{

    gulp.src(PATH.dist.css + '**/*.css')
      .pipe(plumber())
      .pipe(minifyCSS())
      .pipe(gulp.dest(PATH.production.css));

});

// <!-- ************************************************************
//
// styleguide
//
// ************************************************************ -->

// gulp.task("styleguide", ()=>{

//     return sass(PATH.src.css, { 
//             style: 'expanded',
//             compass : true,
//             sourcemap: true
//         })
//         .pipe(plumber())
//         .pipe(gulp.dest('./styleguide'))
//         .pipe(styledocco({
//             out: './styleguide',
//             name: 'My Project',
//             'no-minify': true
//         }))
// });
