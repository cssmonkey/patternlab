export default (gulp, args, config, srcDir)=> {
    const parentDir = '../../src/'
    const cssSrc = srcDir + 'css/**/*.css';
    const jsSrc = srcDir + 'js/**/*.js';
    
    gulp.task('copyToParent:js', () => {
        return gulp.src(jsSrc)
            .pipe(gulp.dest(parentDir + 'js'));
    });

    gulp.task('copyToParent:css', () => {
        return gulp.src(cssSrc)
            .pipe(gulp.dest(parentDir + 'css'));
    });
}
