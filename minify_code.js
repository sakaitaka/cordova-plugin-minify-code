module.exports = function(context) {
    var gulp = require('gulp');
    var minify = require('gulp-minifier');
    var platforms = context.opts.platforms;
    var projectRoot = context.opts.projectRoot;
    var path = require('path');
    var platformWWW;
    if (platforms.indexOf('ios') >= 0 || platforms.indexOf('windows') >= 0 || platforms.indexOf('browser') >= 0) {
        platformWWW = path.resolve(projectRoot, 'platforms', platforms[0], 'www');
    } else if (platforms.indexOf('android') >= 0) {
        platformWWW = path.resolve(projectRoot, 'platforms', platforms[0], 'app/src/main/assets/www');
    } else {
        console.log('ERROR: not supported platform.');
        return;
    }
    console.log('cordova-plugin-minify-code: minifing task start...');
    console.log('Target Directory: ' + platformWWW);
    gulp.src(platformWWW + '/**/*').pipe(minify({
        minify: true,
        minifyHTML: {
            collapseWhitespace: true,
            conservativeCollapse: true,
        },
        minifyJS: {
            sourceMap: false
        },
        minifyCSS: true
    })).pipe(gulp.dest(platformWWW));
};