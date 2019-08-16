module.exports = function(context) {
    var gulp = require('gulp');
    var minify = require('gulp-minifier');
    var debug = require('gulp-debug');
    var platforms = context.opts.platforms;
    var projectRoot = context.opts.projectRoot;
    console.log(platforms);
    console.log(projectRoot);
    var path = require('path');
    var platformWWW;
    if (platforms.indexOf('ios') >= 0 || platforms.indexOf('windows') >= 0) {
        platformWWW = path.resolve(projectRoot, 'platforms', platforms[0], 'www');
    } else if (platforms.indexOf('android') >= 0) {
        platformWWW = path.resolve(projectRoot, 'platforms', platforms[0], 'app/src/main/assets/www');
    } else {
        console.log('ERROR: not supported platform.');
        return;
    }
    console.log('cordova-plugin-minify-code: Minify Target Directory: ' + platformWWW);
    console.log('cordova-plugin-minify-code: Task Start...');
    return new Promise(function(resolve) {
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
            })).pipe(gulp.dest(platformWWW))
            .pipe(debug())
            .on('unpipe', function() {
                console.log('cordova-plugin-minify-code: minify success!');
                resolve(resolve);
            });
    });
}