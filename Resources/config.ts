import { Config } from 'protractor'
import * as reporter from 'cucumber-html-reporter'

export let config: Config = {
	allScriptsTimeout: 30000,
	directConnect: true, //For direct connect
	ignoreUncaughtExceptions: true, //To be added if execution ends with error code 199

	framework: 'custom',
	frameworkPath: require.resolve(
		'../../node_modules/protractor-cucumber-framework'
		// This path is w.r.t. the Target folder as execution will be from js file in target
	),

	cucumberOpts: {
		format: [
			'json:../../Reporting/cucumberReport.json', //deprecated
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
		}

		reporter.generate(options)
	},
}
