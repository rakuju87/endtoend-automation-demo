# endtoend-automation-demo

Problem Statement - 1

eBay (https://www.ebay.com.au/) is a popular e-commerce web site.
The test consists in searching for 2 different products, add them in the shopping cart and
validate if the shopping cart contains the selected products.
The test must validate the UI in Chrome and Firefox. Tests must be executed in parallel.

Required NPM modules -

1. Protractor
2. jasmine
3. protractor-jasmine2-html-reporter
4. jasmine-data-provider

Commands to start running scripts locally -

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

   a. webdriver-manager start

   b. protractor conf.js

   c. Alternate to step 3 - Add Glup Task to run protractor tests
   
4. Upload HTML results to shared artifacts

Problem Statement - 2

AWS is a cloud infrastructure that supports lots of business around the world.
The test consists in using the AWS APIs to create an EC2 instance, test if the instance has
been created correctly and cleanup it after having run the test.

Solution -
We would be using Postman for easy managing of all requests and test scripts

Required NPM modules -

1. newman

To start running scripts

1. Use postman to run scripts
2. or Download the collection as JSON Data.

   a. Command "newman -c CollectionName.json – H Reports.html"

Results -

1. Reports.html in the same Directory

CI/CD Pipeline using Bamboo

Steps-

1. Source code checkout
2. Install all NPM modules mentioned above
3. Script to run Postman collection Tests

   a. newman -c CollectionName.json  -O output.json – H Reports.html

4. Upload HTML results to shared artifacts
