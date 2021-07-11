# Protractor_TypeScript_Cucumber_Bdd

This is an Web Automation Testing framework using:

     Protractor
     TypeScript
     Cucumber BDD
     log4js
     cucumber-html-reporter
     Page Object Model

## Installation

### Prerequisite:

     Node.js
     Editor (preferred - Visual Studio Code)

### Extensions in VS Code:

     vscode-icons
     Prettier - Code formatter
     Output Colorizer
     Visual Studio IntelliCode
     npm
     npm Intellisense
     Cucumber (Gherkin) Full Support
     ES7 React/Redux/GraphQL/React-Native snippets

All set!!! Just download the Project folder...

## Framework Structure

     .vscode --> contains settings.js folder (contains parameters for cucumber and preetier)

     Features --> contains cucumber feature files

     Hooks --> contains hooks file

     Logs --> execution logs is generated here by log4js

     Pages --> Contains Business Components and Object Locator files

           *_BC.ts --> contains methods

           *_OB.ts --> contains locators

     Reporting --> HTML report is generated using cucumber-html-reporter

     Resources --> contains configuration files and test data files

           config.ts --> this is the most important file in the framework. This is the configuration file that controls the test execution.

           index.ts --> this file is used to set multiple environments

     TestData --> this folder contains test data files (json, .ts files preferred)

     StepDefinition --> contains step definition files

     Target --> after compilation .ts files are converted into .js files and get stored inside this folder

     Utility --> Contains custom utilities developed in the framework and are used globally across the framework

           CommonFunctions --> contains custom methods to perform protractor checks/actions

           Identification --> contains identification type files (used by *_OB.ts files for storing/handling locators)

           Json_Reader --> utility built to read data from Json file

           Logger.ts --> Configuration file for Log4j2

     .prettierrc --> configuration file for Prettier

     package.json --> contains scripts and dependency info

     tsconfig.json --> configuration file for typescript

## Usage

     1. Download the Project folder

     2. Run command to compile the code and generate node_modules folder (all dependencies will get downloaded in this folder):
        tsc
        OR
        npm run tsc

     3. Run command to run the test:
        npm run <script_name>

         E.g. npm run Test_QA
         (scripts must be added in Scripts section inside package.json file. For e.g., "Test_QA" and "Test_Dev" demo script has been added in this framework.)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Contributors

Avik Guha

## License

Licensed under the [MIT License](LICENSE).
