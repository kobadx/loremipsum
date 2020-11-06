import gulp from "gulp";
import plumber from "gulp-plumber";
import concat from 'gulp-concat';
import strip_debug from 'gulp-strip-debug';
import PATH from '../../_setting/config';

// ------------------------------------------------------------
//  library
// ------------------------------------------------------------
gulp.task('concatJSLibs', ()=>{

    var src = [
                // PATH.src.js + 'libs/util/modernizr.js',
                // PATH.src.js + 'libs/util/dat.gui.min.js',
                PATH.src.js + 'libs/util/Stats.js',

                PATH.src.js + 'libs/jquery/jquery.min.js',
                // PATH.src.js + 'libs/jquery/jquery_slim.min.js',
                PATH.src.js + 'libs/jquery/jquery.throttle-debounce.min.js',
                // PATH.src.js + 'libs/jquery/jquery.mousewheel.js',
                // PATH.src.js + 'libs/jquery/jquery.cookie.js',

                // PATH.src.js + 'libs/canvas/pixi.min.js',
                // PATH.src.js + 'libs/canvas/easeljs-0.8.1.min.js',
                // PATH.src.js + 'libs/canvas/easeljs-0.8.2.min.js',
                // PATH.src.js + 'libs/canvas/preloadjs-0.6.1.min.js',
                // PATH.src.js + 'libs/other/processing.js',

                PATH.src.js + 'libs/canvas/3D/three.js',
                // PATH.src.js + 'libs/canvas/3D/three.min.js',
                // PATH.src.js + 'libs/canvas/3D/TrackballControls.js',
                // PATH.src.js + 'libs/canvas/3D/font/**/*.js',
                PATH.src.js + 'libs/canvas/3D/postprocessing/EffectComposer.js',
                PATH.src.js + 'libs/canvas/3D/postprocessing/**/*.js',
                PATH.src.js + 'libs/canvas/3D/shaders/**/*.js',
                // PATH.src.js + 'libs/canvas/3D/threejs/**/*.js',

                // PATH.src.js + 'libs/canvas/html2canvas.js',

                PATH.src.js + 'libs/tween/TweenMax.min.js',
                PATH.src.js + 'libs/tween/DrawSVGPlugin.min.js',
                PATH.src.js + 'libs/tween/CustomEase.js',
                // PATH.src.js + 'libs/tween/ImprovedNoise.js',
                // PATH.src.js + 'libs/tween/perlin.js',

                // PATH.src.js + 'libs/physics/p2.min.js',

              ]

    gulp.src(src)
        .pipe(plumber())
        .pipe(concat('libs.js'))
        // .pipe(gulp.dest(PATH.dist.js));
        // .pipe(gulp.dest(PATH.dist.js + 'common/'));
        .pipe(gulp.dest(PATH.dist.js + 'unconcat/'));

});

// ------------------------------------------------------------
// main
// ------------------------------------------------------------
gulp.task('concatJS', ()=>{

    var src = [
                  PATH.src.js + 'src/gb.js',

                  PATH.src.js + 'src/myLibs/**/*.js',
                  PATH.src.js + 'src/Func/**/*.js',
                  PATH.src.js + 'src/Layout/**/*.js',
                  PATH.src.js + 'src/Display/**/*.js',

              ]

    gulp.src(src)
        .pipe(plumber())
        // .pipe(babel({presets: [es2015]}))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(PATH.dist.js + 'common/'));

});