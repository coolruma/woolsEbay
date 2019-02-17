module.exports = function TakeScreenshot() {
    this.After(function (scenario, callback) {
        if (scenario.isFailed()) {
            browser.takeScreenshot().then(function (png) {
                var decodedImage = new Buffer(png, 'base64');
                scenario.attach(decodedImage, 'image/png');
                callback();
            });
        } else {
            callback();
        }
    });
};
