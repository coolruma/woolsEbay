exports.config = {
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    capabilities: {
        //browserName: 'chrome', // firefox
        browserName: 'chrome',
        seleniumAddress: 'http://localhost:4444/wd/hub',
        'ignoreProtectedModeSettings': true,
        maxInstances: 1,
    },
    params: {
        ebay: {
            baseUrl: 'https://www.ebay.com.au/'
        }
    },

    specs: [
            'tests/featureFiles/**/ebayCheckoutVerification.feature'
    ],

    cucumberOpts: {
        format: ['json:./reports/cucumber-test-results.json', 'pretty'],
        require: ['./tests/featureFiles/**/*_steps.js','./tests/support/*.js'],
        tags: [],
        ignoreUncaughtExceptions: true,
        profile: false,
        'no-source': true
    },
    ignoreUncaughtExceptions: true,
};