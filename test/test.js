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

var plugin_ios = require('../minify_code')(context_ios);
var plugin_android = require('../minify_code')(context_android);
var plugin_windows = require('../minify_code')(context_windows);