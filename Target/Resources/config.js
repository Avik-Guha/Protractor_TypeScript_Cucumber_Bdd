"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    allScriptsTimeout: 30000,
    directConnect: true,
    ignoreUncaughtExceptions: true,
    framework: 'custom',
    frameworkPath: require.resolve('../../node_modules/protractor-cucumber-framework'
    // This path is w.r.t. the Target folder as execution will be from js file in target
    ),
    cucumberOpts: {
        format: [
            'json:../../Reporting/cucumberReport.json',
            'html:../../Reporting/cucumberReport.html',
        ],
        require: [
            '../Hooks/*.js',
            '../Utility/*.js',
            '../Utility/CommonFunctions/*.js',
            '../Utility/Identification/*.js',
            '../Pages/*.js',
            '../StepDefinition/*.js',
            '../Resources/*.js',
        ],
        // ***controls execution w.r.t feature tags in feature file***
        // ***remove it if you want to execute w.r.t. scenario tags***
        //features: 'Feature',
        //tags: '@Feature_Launch_Application or @Feature_Handle_Textbox',
        tags: '@Feature_Handle_Textbox',
    },
    // This path is w.r.t. the Target folder as execution will be from target
    specs: ['../../Features/*.feature'],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['incognito', 'disable-extensions', 'disable-infobars'],
        },
    },
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './Reporting/cucumberReport.json',
            output: './Reporting/cucumber_Report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
        };
        reporter.generate(options);
    },
};
