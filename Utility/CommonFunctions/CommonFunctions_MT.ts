import {
	browser,
	ElementFinder,
	protractor,
	ElementArrayFinder,
	WebElement,
	by,
} from 'protractor'
import { title } from 'process'
import path from 'path'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const expect = chai.expect
const deferred = protractor.promise.defer()

var EC = protractor.ExpectedConditions

export class CommonFunctions_MT {
	//                                                                           \\
	//************************* Operations on Web Browser ************************\\
	//                                                                             \\

	/****** Launch URL
	 ***** Method to launch an url
	 **** @Creator Avik Guha
	 ***/
	public async launchURL(url: string) {
		await browser.get(url)
	}

	/****** Delete Cookies
	 ***** Method to Delete Cookies
	 **** @Creator Avik Guha
	 ***/
	public async deleteCookies() {
		await browser.executeScript('window.sessionStorage.clear();')
		await browser.executeScript('window.localStorage.clear();')
	}

	//                                                                           \\
	//************************* Operations on Web Page ***************************\\
	//                                                                             \\

	/****** close opened tabs, except 1st tab
	 ***** Method to close opened tabs, except 1st tab
	 **** @Creator Avik Guha
	 ***/
	closeOpenedTabs() {
		browser.getAllWindowHandles().then(function (handles) {
			for (let i = 1; i < handles.length; i++) {
				if (handles[i]) {
					console.log('** Closing tab: ' + i + ' **')
					browser.driver.switchTo().window(handles[i])
					browser.driver.close()
				}
			}
			browser.driver.switchTo().window(handles[0])
		})
	}

	/****** Press Enter
	 ***** Method to press the ENTER key
	 **** @Creator Avik Guha
	 **/
	public async enter() {
		await browser.actions().sendKeys(protractor.Key.ENTER).perform()
	}

	/****** Get Web Title
	 ***** Method to verify Title of the page
	 **** @Creator Avik Guha
	 **/
	public async checkTitle(valueToCheck: string) {
		await expect(browser.getTitle()).to.eventually.equal(valueToCheck)
	}

	/****** Get Page URL
	 ***** Method to verify URL of the page
	 **** @Creator Avik Guha
	 **/
	public async checkUrl(valueToCheck: string) {
		await expect(browser.getCurrentUrl()).to.eventually.equal(valueToCheck)
	}

	//                                                                                     \\
	//*********************** Operations on Editable/Non-Editable Box **********************\\
	//                                                                                       \\

	/****** Enter a Value
	 ***** Method to enter a value in text box
	 **** @Creator Avik Guha
	 ***/
	public async enterValue(
		textboxLocation: ElementFinder,
		valueToEnter: string | number
	) {
		await browser.wait(EC.visibilityOf(textboxLocation), 60000)
		await textboxLocation.sendKeys(valueToEnter)
	}

	/****** Clear the Value
	 ***** Method to clear the value in text box
	 **** @Creator Avik Guha
	 **/
	public async clearValue(textboxLocation: ElementFinder) {
		await browser.wait(EC.visibilityOf(textboxLocation), 60000)
		await textboxLocation.clear()
		await expect(textboxLocation.getText()).to.eventually.equal('')
	}

	/****** Check enabled status (commen for any element)
	 ***** Method to verify if the field is enabled
	 **** @Creator Avik Guha
	 **/
	public async isEnabled(elementLocation: ElementFinder) {
		await browser.wait(EC.visibilityOf(elementLocation), 60000)
		await expect(elementLocation.isEnabled()).to.be.eventually.true
	}

	/****** Check existance (commen for any element)
	 ***** Method to verify if the element is not enabled
	 **** @Creator Avik Guha
	 *** @returns {Promise<boolean>}
	 **/
	public async isNotEnabled(elementLocation: ElementFinder) {
		await elementLocation
			.isEnabled()
			.then(async function (isEnabled) {
				if (isEnabled) {
					// element is enabled
					console.log('Element is enabled')
					await deferred.fulfill(false)
				} else {
					// element is not enabled
					console.log('Element is not enabled')
					await deferred.fulfill(true)
				}
			})
			.catch(async function (err) {
				console.log(
					' --- Element is not enabled, Exception error caught'
				)
				await deferred.fulfill(true)
			})

		return await deferred.promise
	}

	/****** Check existance (commen for any element)
	 ***** Method to verify if the element is displayed
	 **** @Creator Avik Guha
	 **/
	public async isDisplayed(elementLocation: ElementFinder) {
		await browser.wait(EC.visibilityOf(elementLocation), 60000)
		await expect(elementLocation.isDisplayed()).to.be.eventually.true
	}

	/****** Check existance (commen for any element)
	 ***** Method to verify if the element is not displayed
	 **** @Creator Avik Guha
	 *** @returns {Promise<boolean>}
	 **/
	public async isNotDisplayed(elementLocation: ElementFinder) {
		await browser
			.wait(EC.visibilityOf(elementLocation), 3000)
			.then(async function (isVisible) {
				if (isVisible) {
					// element is visible
					console.log('Element is displayed')
					await deferred.fulfill(false)
				} else {
					// element is not visible
					console.log('Element is not available')
					await deferred.fulfill(true)
				}
			})
			.catch(async function (err) {
				console.log(' --- Element is not found, Exception error caught')
				await deferred.fulfill(true)
			})

		return await deferred.promise
	}

	/****** Get the value
	 ***** Method to verify value in the field
	 **** @Creator Avik Guha
	 **/
	public async checkValue(
		elementLocation: ElementFinder,
		expected_value: string
	) {
		await browser.wait(EC.visibilityOf(elementLocation), 60000)
		await expect(elementLocation.isDisplayed()).to.be.eventually.true
		await expect(elementLocation.getText()).to.eventually.equal(
			expected_value
		)
	}

	/****** Get the Length
	 ***** Method to verify length of the edit box
	 **** @Creator Avik Guha
	 **/
	public async testLength(
		elementLocation: ElementFinder,
		valueToCheck: string
	) {
		await browser.wait(EC.visibilityOf(elementLocation), 60000)
		await expect(
			elementLocation.getAttribute('maxlength')
		).to.eventually.equal(valueToCheck)
	}

	/****** Click if text matches
	 ***** Method to click on element if text matches
	 **** @Creator Avik Guha
	 *** @returns {Promise<boolean>}
	 **/
	public async click_IfTextMatches(
		elementLocation: ElementFinder,
		valueToTest: string
	) {
		await browser.sleep(6000)
		//await browser.wait(EC.visibilityOf(elementLocation), 60000);
		await elementLocation
			.getAttribute('title')
			.then(async function (title) {
				let value: string = title.toString()
				if (value === valueToTest) {
					// element is visible
					await elementLocation.click()
					//await deferred.fulfill(true);
					return await deferred.fulfill(true)
				} else {
					// element is not visible
					await console.log(
						'Element is not available OR Check search result'
					)
					return await deferred.reject()
					//return await deferred.promise;
				}
			})

		//return await deferred.promise;
	}

	//                                                                           \\
	//**************************** Operations on Link ****************************\\
	//                                                                             \\

	/****** Click (common for all clickable element)
	 ***** Method to click on link, button, drop-down, check-box, radio button
	 **** @Creator Avik Guha
	 **/
	public async click(elementLocation: ElementFinder) {
		await browser.wait(EC.visibilityOf(elementLocation), 60000)
		await elementLocation.click()
	}

	/****** Click (common for all clickable element) and ignore if element not available
	 ***** Method to click on link, button, drop-down, check-box, radio button
	 **** @Creator Avik Guha
	 *** @returns {Promise<boolean>}
	 **/
	public async click_IgnoreIfUnavailable(elementLocation: ElementFinder) {
		await browser
			.wait(EC.visibilityOf(elementLocation), 3000)
			.then(async function (isVisible) {
				if (isVisible) {
					// element is visible
					console.log('Element is displayed')
					await elementLocation.click()
					await deferred.fulfill(true)
				} else {
					// element is not visible
					console.log('Element is not available')
					await deferred.fulfill(true)
				}
			})
			.catch(async function (err) {
				console.log(' --- Element is not found, Exception error caught')
				await deferred.fulfill(true)
			})

		return await deferred.promise
	}

	//                                                                              \\
	//***************************** Operations on Checkbox **************************\\
	//                                                                                \\

	/****** Selected (common for all selectable element)
	 ***** Method to verify if the element is Selected or not. For Checkbox, Radio buttons etc.
	 **** @Creator Avik Guha
	 **/
	public async isSelected(elementLocation: ElementFinder) {
		await browser.wait(EC.visibilityOf(elementLocation), 60000)
		await expect(elementLocation.isSelected()).to.be.eventually.true
	}

	/****** Not Selected (common for all selectable element)
	 ***** Method to verify if the element is not Selected. For Checkbox, Radio buttons etc.
	 **** @Creator Avik Guha
	 *** @returns {Promise<boolean>}
	 **/
	public async isNotSelected(elementLocation: ElementFinder) {
		await elementLocation
			.isSelected()
			.then(async function (isSelected) {
				if (isSelected) {
					// element is selected
					console.log('Element is selected')
					await deferred.fulfill(false)
				} else {
					// element is not selected
					console.log('Element is not selected')
					await deferred.fulfill(true)
				}
			})
			.catch(async function (err) {
				console.log(
					' --- Element is not selected, Exception error caught'
				)
				await deferred.fulfill(true)
			})

		return await deferred.promise
	}

	/****** Select (common for Checkbox and Radio button)
	 ***** Method to select Checkbox and Radio button
	 **** @Creator Avik Guha
	 **/
	public async select(elementLocation: ElementFinder) {
		await browser.wait(EC.visibilityOf(elementLocation), 60000)

		await elementLocation
			.isSelected()
			.then(async function (isSelected) {
				if (isSelected) {
					// element is selected
					console.log('Element is already selected')
					await deferred.fulfill(true)
				} else {
					// element is not selected
					console.log('Element is not selected')
					await elementLocation.click()
					await deferred.fulfill(true)
				}
			})
			.catch(async function (err) {
				console.log(
					' --- Element is not selected, Exception error caught'
				)
				await elementLocation.click()
				await deferred.fulfill(true)
			})
	}

	//                                                                    \\
	//************************* Operations on Alert ************************\\
	//                                                                       \\

	/****** Expect an alert to be present
	 ***** Method to wait till alert is displayed
	 **** @Creator Avik Guha
	 ***/
	public async alertIsDisplayed() {
		await browser.wait(EC.alertIsPresent(), 60000)
	}

	/******* Method to verify drop down value in the page *******/
	/****** Creator: {Avik Guha} ******/
	public async checkDropDownValue(
		dropdownLocation: ElementFinder | ElementArrayFinder,
		dropdownValues: ElementFinder | ElementArrayFinder,
		valueToCheck: string
	) {
		const deferred = protractor.promise.defer()

		await dropdownLocation.click()

		let match: string

		await browser.findElements(dropdownValues).then(async (items: any) => {
			for (var i = 0; i < items.length; i++) {
				console.log(i + ' ---Loop number') // print output
				let value: string = items[i].toString()
				if (i > 0) {
					await browser
						.actions()
						.sendKeys(protractor.Key.ARROW_DOWN)
						.perform()
					await browser.sleep(3000)
				}
				if (value === valueToCheck) {
					await browser
						.actions()
						.sendKeys(protractor.Key.ENTER)
						.perform()
					console.log(value + ' ---Value displayed') // print output
					;(await match) == 'Success'
				} else {
					;(await match) == 'Fail'
				}
			}

			if (match === 'Success') {
				await deferred.fulfill(true)
			} else {
				await deferred.fulfill(false)
			}
		})

		return await deferred.promise
	}

	/******* Method to verify drop down value in the page *******/
	/****** Creator: {Avik Guha} ******/
	public async testDropDownValue(
		dropdownLocation: ElementFinder | ElementArrayFinder,
		dropdownValues: ElementFinder | ElementArrayFinder,
		valueToMatch: string
	) {
		//const deferred = protractor.promise.defer();

		await dropdownLocation.click()

		console.log('Value to match is: ' + valueToMatch)

		/*await element.all(by.css(dropdownValues)).getText().then((text) =>{
            console.log("Dropdown values are: " + text);
        });*/

		let values = []

		await dropdownLocation.getText().then((text: string) => {
			console.log('Dropdown values are: ' + text)
			//await values == text

			values.push(text.toString())

			for (var i = 0; i <= 0; i++) {
				console.log(
					'Loop number: ' + i + '  Dropdown value is: ' + values[i]
				)

				if (values[i] === valueToMatch) {
					browser.actions().sendKeys(protractor.Key.ENTER).perform()
					browser.sleep(3000)
					break
				} else {
					browser
						.actions()
						.sendKeys(protractor.Key.ARROW_DOWN)
						.perform()
					browser.sleep(1000)
				}
			}
		})

		//return await deferred.promise;
	}

	/****** Choose File To Upload
	 ***** Method to choose file to upload
	 **** @Creator Avik Guha
	 **/
	public async chooseFileToUpload(
		elementLocation: ElementFinder,
		xpath_value: string,
		filePath: string
	) {
		await browser.wait(EC.visibilityOf(elementLocation), 60000)
		const fPath = path.resolve(__dirname, filePath)
		await browser
			.findElement(by.xpath(xpath_value))
			.then(function (el: WebElement) {
				//scroll till the upload file button is on screen
				//browser.executeScript("arguments[0].scrollIntoView(true);",el);
				el.sendKeys(fPath)
			})
	}

	/****** Drag And Drop (works well with angular elements. Sometimes doesnt work with non-agular elements)
	 ***** Method to drag and drop element
	 **** @Creator Avik Guha
	 **/
	public async moveMouse(elementLocation: ElementFinder) {
		await browser.wait(EC.visibilityOf(elementLocation), 60000)
		await browser.actions().mouseMove(elementLocation).perform()
	}

	//                                                                    \\
	//************************* Operations on Frames ************************\\
	//                                                                       \\

	/****** Enter text inside a Frame
	 ***** Method to enter text inside a Frame
	 **** @Creator Avik Guha
	 ***/
	public async switchToFrame(frameLocation: ElementFinder) {
		await browser.wait(EC.visibilityOf(frameLocation), 60000)
		await browser.switchTo().frame(frameLocation.getWebElement())
	}

	/****** Switch to Parent Frame
	 ***** Method to switch to parent Frame
	 **** @Creator Avik Guha
	 ***/
	public async navigateToParentFrame() {
		await browser.driver.switchToParentFrame()
	}

	/****** Exit Frames
	 ***** Method to exit frames and navigate back to default content
	 **** @Creator Avik Guha
	 ***/
	public async exitFrames() {
		await browser.switchTo().defaultContent()
	}
}
