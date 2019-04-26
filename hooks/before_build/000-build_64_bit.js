#!/usr/bin/env node

module.exports = function (context) {
    var p = new Promise(function (resolve, reject) {
        var UpdateConfig = require('./../update_config.js');
        var updateConfig = new UpdateConfig(context);
        updateConfig.beforeBuild64bit();
        resolve();
    })
    return p;
};
