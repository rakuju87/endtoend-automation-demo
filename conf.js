var Jasmine2HtmlReporter = require('/Users/kujurra_local/node_modules/protractor-jasmine2-html-reporter');
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  multiCapabilities: [{
          'browserName': 'firefox'
        }],
  specs: ['./**/*.spec.js'],
  framework: 'jasmine2',
  suites: {
    endtoend: './endtoendautomation/*.spec.js',
    api: './**/*.spec.js'
  },
  onPrepare: function() {
    //var capabilities = browser.getCapabilities();
    var today = new Date();
    var timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + 'h-' + today.getMinutes() + 'm-' +today.getSeconds()+'s';
    browser.getProcessedConfig().then(function(config) {
      var capabilities = config.capabilities;
        jasmine.getEnv().addReporter(
                new Jasmine2HtmlReporter({
                    savePath: './Reports/' + capabilities.browserName,
                    cleanDestination: true,
                    takeScreenshots: true,
                    takeScreenshotsOnlyOnFailures: false,
                    fileName: 'ebayEndtoEnd_' + timeStamp
                })
        );
    });
    browser.ignoreSynchronization = true;
    }
}
