exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
            'browserName': 'chrome'
        },
  specs: ['./**/*.spec.js'],

  suites: {
    endtoend: './endtoendautomation/*.spec.js',
    api: './**/*.spec.js'
  },

  onPrepare: function(){
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().setPosition(0,0);
    browser.driver.manage().window().setSize(1280, 720);
  }
}
