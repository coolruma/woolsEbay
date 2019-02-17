var conf = require('../../conf');
var ebayUrl = conf.config.params.ebay.baseUrl;
var hooks = function () {
    this.registerHandler('BeforeFeature', function(feature){
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        browser.get(ebayUrl);
    });
};

module.exports = hooks;
