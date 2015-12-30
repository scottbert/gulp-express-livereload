'use strict';
const gulp = require('gulp');
const del = require('del');

const CONSTS = require('./CONSTS');

gulp.task('clean',  () => {
    return del.sync([CONSTS.APPSERVER_DEST, CONSTS.DEPLOY_DEST]);
});
