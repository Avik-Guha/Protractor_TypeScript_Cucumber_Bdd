import { browser } from 'protractor'
import { Before, After, Status, setDefaultTimeout } from '@cucumber/cucumber'

//This will set default timeout from 5000 to new
setDefaultTimeout(60000)

// This hook will be executed before all scenarios
Before(async function () {
	browser.manage().window().maximize()
	browser.waitForAngularEnabled(false)
	browser.ignoreSynchronization = true //for non-angular websites
})

After(async function (scenario) {
	if (scenario.result.status === Status.FAILED) {
		const screenshot = await browser.takeScreenshot()
		this.attach(screenshot, 'image/png')
	}
	browser.executeScript('window.sessionStorage.clear();')
	browser.executeScript('window.localStorage.clear();')
})
