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
Spotify is the leading music playing app.
Tests to search user information, featured-playlists, new releases, categories, single category and playlists

Authentication - OAuth2.0

Update the Access token before running

Solution -
We would be using Postman for easy managing of all requests and test scripts

Required NPM modules -

1. newman
2. newman-html-reporter

To start running scripts

1. Use postman to run scripts
2. or Download the collection as JSON Data.

   a. Command "newman run APIautomation/Spotify.postman_collection -r html,junit --reporter-html-export Reports/API/Spotify.html --reporter-junit-export Reports/API/Spotify.xml"

Results -

1. Spotify.html
2. JUnit.xml

CI/CD Pipeline using Bamboo

Steps-

1. Source code checkout
2. Install all NPM modules mentioned above
3. Script to run Postman collection Tests

   a. "newman run APIautomation/Spotify.postman_collection -r html,junit --reporter-html-export Reports/API/Spotify.html --reporter-junit-export Reports/API/Spotify.xml"

4. Upload HTML results to shared artifacts and Junit xml for bamboo resulting
