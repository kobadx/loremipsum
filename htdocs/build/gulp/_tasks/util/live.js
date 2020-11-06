import gulp from "gulp";
// import streamqueue from 'streamqueue';
import connect from 'gulp-connect';
// import webserver from "gulp-webserver";
// import livereload from 'gulp-livereload';
import browserSync from "browser-sync";
import ssi from "browsersync-ssi";
import PATH from '../../_setting/config';

// ------------------------------------------------------------
//  for DIST
// ------------------------------------------------------------
gulp.task("browserDist", ()=>{
    browserSync({
        server: {
            notify: false,
            // baseDir: PATH.dist.root // ルートとなるディレクトリを指定 distをルート
            baseDir: PATH.root + 'dist/', // ルートとなるディレクトリを指定
        },
        // startPath: "/list.html"
    });
});

// ------------------------------------------------------------
//  for PRODUCTION
// ------------------------------------------------------------
gulp.task("browserProduction", ()=>{
    browserSync({
        server: {
            notify: false,
            baseDir: PATH.production.root
        },
        injectChanges: false
    });
});

gulp.task("sync", ()=>{
    browserSync.reload();
});
