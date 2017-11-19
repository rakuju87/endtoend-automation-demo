# endtoend-automation-demo

Problem Statement -

eBay (https://www.ebay.com.au/) is a popular e-commerce web site.
The test consists in searching for 2 different products, add them in the shopping cart and
validate if the shopping cart contains the selected products.
The test must validate the UI in Chrome and Firefox. Tests must be executed in parallel.

Required NPM modules -

1. Protractor
2. jasmine
3. protractor-jasmine2-html-reporter
4. jasmine-data-provider

Commands to start run scripts locally -

webdriver-manager is a helper tool to easily get an instance of a Selenium Server running.

1. webdriver-manager update
2. webdriver-manager start
3. protractor conf.js

Results -

1. Reports will store under Reports folder as per capabilities

CI/CD Pipeline using Bamboo

Steps-
1. Source code checkout
2. Install all NPM modules mentioned above
3. Script to run protractor Tests
   webdriver-manager start
   protractor conf.js
Alternate to step 3 - Add Glup Task
4. Upload HTML results to shared artifacts
