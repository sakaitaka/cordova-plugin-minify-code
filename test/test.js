var context_ios = {
    opts: {
        platforms: ['ios'],
        projectRoot: __dirname.slice(0, -5)
    }
};
var context_android = {
    opts: {
        platforms: ['android'],
        projectRoot: __dirname.slice(0, -5)
    }
};
var context_windows = {
    opts: {
        platforms: ['windows'],
        projectRoot: __dirname.slice(0, -5)
    }
};
require('../minify_code')(context_ios);
require('../minify_code')(context_android);
require('../minify_code')(context_windows);