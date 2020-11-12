import gulp from "gulp";
import plumber from "gulp-plumber";
import rimraf from 'rimraf';
import PATH from '../../_setting/config';

// <!-- ************************************************************
//
// clearn
//
// ************************************************************ -->

gulp.task('clean', (callback)=>{

    rimraf(PATH.production.root, callback);
    
});