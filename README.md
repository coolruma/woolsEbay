# Protractor-Cucumber Framework

To write Front End tests of a angular application we can make use of this
Protractor-Cucumber Framework, which will support both angular and non-angular applications.

## Setup Steps
1) Make sure you have latest version of Node & NPM on your machine
2) Checkout the fresh code on the machine, do the following:
```sh
$ npm install
```
This will do the following:
- Install build-time dependencies (`npm install`).
- Installs 3rd party libraries

##### Gulp(Task Runner) is integrated to work with this project.
### To get the latest of webdriver:
```sh
gulp webdriver-update
```
### To start Selenium server:
```sh
gulp webdriver-start
```

Once it is done, now the basic setup is done to run sample tests.
## To Run the Tests on Default Environment:
Now, you can go ahead by using the below command
```sh
$ gulp execute
```
What gulp execute does?
- It will update the webdriver manager with latest updates
- On Completion/Errors, It will execute the HTML report

## To Run the Tests on Specified Environment:
Gulp(Task Runner) is integrated to work with this project. So, you can go ahead by using the below command
```sh
$ gulp execute --env <environmentName>
```
ex: $ gulp execute --env uat

## To Run the Tests on Specified Environment & specific feature:
Gulp(Task Runner) is integrated to work with this project. So, you can go ahead by using the below command
```sh
$ gulp execute --env <environmentName> --specs <featureName>.feature
```
ex: $ gulp execute --env uat --specs MGLLogin.feature

## HTML reports:

HTML report generation is enabled by default. It's default location is /reports/cucumber-test-results.html.

### SCREENSHOTS when FAILURE:
Screenshot will show up in the report when there is a failure. Click on the red coloured step, to see the screenshot

## Framework Structure:
We are using BDD Framework with Page object model approach where it will be easy to distinguish all the files used in a structured way,

```sh
|-- reports
├── tests
│      ├── common
│      │   ├── settings.js
│      │   └── ...
│      ├── featureFiles
│      │   ├── LoginFunctionality
│      │   │   ├──  DEFTMyAccount.feature
│      │   │   ├── Login.feature
│      │   │   └── ...
│      │   │   └── step_definitions
│      │   │       ├── Home_steps.js
│      │   │       ├── My_account_steps.js
│      │   │       ├── Login_steps.js
│      │   │       └── ...
│      ├── pages
│      │   ├── homePage.js
│      │   ├── mglHomePage.js
│      │   └── ...
│      └── support
│      │   ├── cucumber-json-formatter.js
│      │   └── hooks.js
|      |   ___ ...
├── package.json
├── gulpfile.js
├── conf.js
├── README.md
```

### Additions:
   Supported Browsers: Chrome (as of now)
   Multicapabilities: Running the same test in specified Browsers at a time.
   Parallel Execution: Parallel Executions. Note: Test concurrency is done at the feature level. Individual tests/steps in a feature file will not run concurrently.
