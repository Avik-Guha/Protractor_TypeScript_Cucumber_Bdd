"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonFunctions_MT = void 0;
const protractor_1 = require("protractor");
const path_1 = __importDefault(require("path"));
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const deferred = protractor_1.protractor.promise.defer();
var EC = protractor_1.protractor.ExpectedConditions;
class CommonFunctions_MT {
    //                                                                           \\
    //************************* Operations on Web Browser ************************\\
    //                                                                             \\
    /****** Launch URL
     ***** Method to launch an url
     **** @Creator Avik Guha
     ***/
    launchURL(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get(url);
        });
    }
    /****** Delete Cookies
     ***** Method to Delete Cookies
     **** @Creator Avik Guha
     ***/
    deleteCookies() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.executeScript('window.sessionStorage.clear();');
            yield protractor_1.browser.executeScript('window.localStorage.clear();');
        });
    }
    //                                                                           \\
    //************************* Operations on Web Page ***************************\\
    //                                                                             \\
    /****** close opened tabs, except 1st tab
     ***** Method to close opened tabs, except 1st tab
     **** @Creator Avik Guha
     ***/
    closeOpenedTabs() {
        protractor_1.browser.getAllWindowHandles().then(function (handles) {
            for (let i = 1; i < handles.length; i++) {
                if (handles[i]) {
                    console.log('** Closing tab: ' + i + ' **');
                    protractor_1.browser.driver.switchTo().window(handles[i]);
                    protractor_1.browser.driver.close();
                }
            }
            protractor_1.browser.driver.switchTo().window(handles[0]);
        });
    }
    /****** Press Enter
     ***** Method to press the ENTER key
     **** @Creator Avik Guha
     **/
    enter() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
        });
    }
    /****** Get Web Title
     ***** Method to verify Title of the page
     **** @Creator Avik Guha
     **/
    checkTitle(valueToCheck) {
        return __awaiter(this, void 0, void 0, function* () {
            yield expect(protractor_1.browser.getTitle()).to.eventually.equal(valueToCheck);
        });
    }
    /****** Get Page URL
     ***** Method to verify URL of the page
     **** @Creator Avik Guha
     **/
    checkUrl(valueToCheck) {
        return __awaiter(this, void 0, void 0, function* () {
            yield expect(protractor_1.browser.getCurrentUrl()).to.eventually.equal(valueToCheck);
        });
    }
    //                                                                                     \\
    //*********************** Operations on Editable/Non-Editable Box **********************\\
    //                                                                                       \\
    /****** Enter a Value
     ***** Method to enter a value in text box
     **** @Creator Avik Guha
     ***/
    enterValue(textboxLocation, valueToEnter) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(EC.visibilityOf(textboxLocation), 60000);
            yield textboxLocation.sendKeys(valueToEnter);
        });
    }
    /****** Clear the Value
     ***** Method to clear the value in text box
     **** @Creator Avik Guha
     **/
    clearValue(textboxLocation) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(EC.visibilityOf(textboxLocation), 60000);
            yield textboxLocation.clear();
            yield expect(textboxLocation.getText()).to.eventually.equal('');
        });
    }
    /****** Check enabled status (commen for any element)
     ***** Method to verify if the field is enabled
     **** @Creator Avik Guha
     **/
    isEnabled(elementLocation) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(EC.visibilityOf(elementLocation), 60000);
            yield expect(elementLocation.isEnabled()).to.be.eventually.true;
        });
    }
    /****** Check existance (commen for any element)
     ***** Method to verify if the element is not enabled
     **** @Creator Avik Guha
     *** @returns {Promise<boolean>}
     **/
    isNotEnabled(elementLocation) {
        return __awaiter(this, void 0, void 0, function* () {
            yield elementLocation
                .isEnabled()
                .then(function (isEnabled) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (isEnabled) {
                        // element is enabled
                        console.log('Element is enabled');
                        yield deferred.fulfill(false);
                    }
                    else {
                        // element is not enabled
                        console.log('Element is not enabled');
                        yield deferred.fulfill(true);
                    }
                });
            })
                .catch(function (err) {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log(' --- Element is not enabled, Exception error caught');
                    yield deferred.fulfill(true);
                });
            });
            return yield deferred.promise;
        });
    }
    /****** Check existance (commen for any element)
     ***** Method to verify if the element is displayed
     **** @Creator Avik Guha
     **/
    isDisplayed(elementLocation) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(EC.visibilityOf(elementLocation), 60000);
            yield expect(elementLocation.isDisplayed()).to.be.eventually.true;
        });
    }
    /****** Check existance (commen for any element)
     ***** Method to verify if the element is not displayed
     **** @Creator Avik Guha
     *** @returns {Promise<boolean>}
     **/
    isNotDisplayed(elementLocation) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser
                .wait(EC.visibilityOf(elementLocation), 3000)
                .then(function (isVisible) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (isVisible) {
                        // element is visible
                        console.log('Element is displayed');
                        yield deferred.fulfill(false);
                    }
                    else {
                        // element is not visible
                        console.log('Element is not available');
                        yield deferred.fulfill(true);
                    }
                });
            })
                .catch(function (err) {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log(' --- Element is not found, Exception error caught');
                    yield deferred.fulfill(true);
                });
            });
            return yield deferred.promise;
        });
    }
    /****** Get the value
     ***** Method to verify value in the field
     **** @Creator Avik Guha
     **/
    checkValue(elementLocation, expected_value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(EC.visibilityOf(elementLocation), 60000);
            yield expect(elementLocation.isDisplayed()).to.be.eventually.true;
            yield expect(elementLocation.getText()).to.eventually.equal(expected_value);
        });
    }
    /****** Get the Length
     ***** Method to verify length of the edit box
     **** @Creator Avik Guha
     **/
    testLength(elementLocation, valueToCheck) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(EC.visibilityOf(elementLocation), 60000);
            yield expect(elementLocation.getAttribute('maxlength')).to.eventually.equal(valueToCheck);
        });
    }
    /****** Click if text matches
     ***** Method to click on element if text matches
     **** @Creator Avik Guha
     *** @returns {Promise<boolean>}
     **/
    click_IfTextMatches(elementLocation, valueToTest) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(6000);
            //await browser.wait(EC.visibilityOf(elementLocation), 60000);
            yield elementLocation
                .getAttribute('title')
                .then(function (title) {
                return __awaiter(this, void 0, void 0, function* () {
                    let value = title.toString();
                    if (value === valueToTest) {
                        // element is visible
                        yield elementLocation.click();
                        //await deferred.fulfill(true);
                        return yield deferred.fulfill(true);
                    }
                    else {
                        // element is not visible
                        yield console.log('Element is not available OR Check search result');
                        return yield deferred.reject();
                        //return await deferred.promise;
                    }
                });
            });
            //return await deferred.promise;
        });
    }
    //                                                                           \\
    //**************************** Operations on Link ****************************\\
    //                                                                             \\
    /****** Click (common for all clickable element)
     ***** Method to click on link, button, drop-down, check-box, radio button
     **** @Creator Avik Guha
     **/
    click(elementLocation) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(EC.visibilityOf(elementLocation), 60000);
            yield elementLocation.click();
        });
    }
    /****** Click (common for all clickable element) and ignore if element not available
     ***** Method to click on link, button, drop-down, check-box, radio button
     **** @Creator Avik Guha
     *** @returns {Promise<boolean>}
     **/
    click_IgnoreIfUnavailable(elementLocation) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser
                .wait(EC.visibilityOf(elementLocation), 3000)
                .then(function (isVisible) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (isVisible) {
                        // element is visible
                        console.log('Element is displayed');
                        yield elementLocation.click();
                        yield deferred.fulfill(true);
                    }
                    else {
                        // element is not visible
                        console.log('Element is not available');
                        yield deferred.fulfill(true);
                    }
                });
            })
                .catch(function (err) {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log(' --- Element is not found, Exception error caught');
                    yield deferred.fulfill(true);
                });
            });
            return yield deferred.promise;
        });
    }
    //                                                                              \\
    //***************************** Operations on Checkbox **************************\\
    //                                                                                \\
    /****** Selected (common for all selectable element)
     ***** Method to verify if the element is Selected or not. For Checkbox, Radio buttons etc.
     **** @Creator Avik Guha
     **/
    isSelected(elementLocation) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(EC.visibilityOf(elementLocation), 60000);
            yield expect(elementLocation.isSelected()).to.be.eventually.true;
        });
    }
    /****** Not Selected (common for all selectable element)
     ***** Method to verify if the element is not Selected. For Checkbox, Radio buttons etc.
     **** @Creator Avik Guha
     *** @returns {Promise<boolean>}
     **/
    isNotSelected(elementLocation) {
        return __awaiter(this, void 0, void 0, function* () {
            yield elementLocation
                .isSelected()
                .then(function (isSelected) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (isSelected) {
                        // element is selected
                        console.log('Element is selected');
                        yield deferred.fulfill(false);
                    }
                    else {
                        // element is not selected
                        console.log('Element is not selected');
                        yield deferred.fulfill(true);
                    }
                });
            })
                .catch(function (err) {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log(' --- Element is not selected, Exception error caught');
                    yield deferred.fulfill(true);
                });
            });
            return yield deferred.promise;
        });
    }
    /****** Select (common for Checkbox and Radio button)
     ***** Method to select Checkbox and Radio button
     **** @Creator Avik Guha
     **/
    select(elementLocation) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(EC.visibilityOf(elementLocation), 60000);
            yield elementLocation
                .isSelected()
                .then(function (isSelected) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (isSelected) {
                        // element is selected
                        console.log('Element is already selected');
                        yield deferred.fulfill(true);
                    }
                    else {
                        // element is not selected
                        console.log('Element is not selected');
                        yield elementLocation.click();
                        yield deferred.fulfill(true);
                    }
                });
            })
                .catch(function (err) {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log(' --- Element is not selected, Exception error caught');
                    yield elementLocation.click();
                    yield deferred.fulfill(true);
                });
            });
        });
    }
    //                                                                    \\
    //************************* Operations on Alert ************************\\
    //                                                                       \\
    /****** Expect an alert to be present
     ***** Method to wait till alert is displayed
     **** @Creator Avik Guha
     ***/
    alertIsDisplayed() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(EC.alertIsPresent(), 60000);
        });
    }
    /******* Method to verify drop down value in the page *******/
    /****** Creator: {Avik Guha} ******/
    checkDropDownValue(dropdownLocation, dropdownValues, valueToCheck) {
        return __awaiter(this, void 0, void 0, function* () {
            const deferred = protractor_1.protractor.promise.defer();
            yield dropdownLocation.click();
            let match;
            yield protractor_1.browser.findElements(dropdownValues).then((items) => __awaiter(this, void 0, void 0, function* () {
                for (var i = 0; i < items.length; i++) {
                    console.log(i + ' ---Loop number'); // print output
                    let value = items[i].toString();
                    if (i > 0) {
                        yield protractor_1.browser
                            .actions()
                            .sendKeys(protractor_1.protractor.Key.ARROW_DOWN)
                            .perform();
                        yield protractor_1.browser.sleep(3000);
                    }
                    if (value === valueToCheck) {
                        yield protractor_1.browser
                            .actions()
                            .sendKeys(protractor_1.protractor.Key.ENTER)
                            .perform();
                        console.log(value + ' ---Value displayed') // print output
                        ;
                        (yield match) == 'Success';
                    }
                    else {
                        ;
                        (yield match) == 'Fail';
                    }
                }
                if (match === 'Success') {
                    yield deferred.fulfill(true);
                }
                else {
                    yield deferred.fulfill(false);
                }
            }));
            return yield deferred.promise;
        });
    }
    /******* Method to verify drop down value in the page *******/
    /****** Creator: {Avik Guha} ******/
    testDropDownValue(dropdownLocation, dropdownValues, valueToMatch) {
        return __awaiter(this, void 0, void 0, function* () {
            //const deferred = protractor.promise.defer();
            yield dropdownLocation.click();
            console.log('Value to match is: ' + valueToMatch);
            /*await element.all(by.css(dropdownValues)).getText().then((text) =>{
                console.log("Dropdown values are: " + text);
            });*/
            let values = [];
            yield dropdownLocation.getText().then((text) => {
                console.log('Dropdown values are: ' + text);
                //await values == text
                values.push(text.toString());
                for (var i = 0; i <= 0; i++) {
                    console.log('Loop number: ' + i + '  Dropdown value is: ' + values[i]);
                    if (values[i] === valueToMatch) {
                        protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
                        protractor_1.browser.sleep(3000);
                        break;
                    }
                    else {
                        protractor_1.browser
                            .actions()
                            .sendKeys(protractor_1.protractor.Key.ARROW_DOWN)
                            .perform();
                        protractor_1.browser.sleep(1000);
                    }
                }
            });
            //return await deferred.promise;
        });
    }
    /****** Choose File To Upload
     ***** Method to choose file to upload
     **** @Creator Avik Guha
     **/
    chooseFileToUpload(elementLocation, xpath_value, filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(EC.visibilityOf(elementLocation), 60000);
            const fPath = path_1.default.resolve(__dirname, filePath);
            yield protractor_1.browser
                .findElement(protractor_1.by.xpath(xpath_value))
                .then(function (el) {
                //scroll till the upload file button is on screen
                //browser.executeScript("arguments[0].scrollIntoView(true);",el);
                el.sendKeys(fPath);
            });
        });
    }
    /****** Drag And Drop (works well with angular elements. Sometimes doesnt work with non-agular elements)
     ***** Method to drag and drop element
     **** @Creator Avik Guha
     **/
    moveMouse(elementLocation) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(EC.visibilityOf(elementLocation), 60000);
            yield protractor_1.browser.actions().mouseMove(elementLocation).perform();
        });
    }
    //                                                                    \\
    //************************* Operations on Frames ************************\\
    //                                                                       \\
    /****** Enter text inside a Frame
     ***** Method to enter text inside a Frame
     **** @Creator Avik Guha
     ***/
    switchToFrame(frameLocation) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(EC.visibilityOf(frameLocation), 60000);
            yield protractor_1.browser.switchTo().frame(frameLocation.getWebElement());
        });
    }
    /****** Switch to Parent Frame
     ***** Method to switch to parent Frame
     **** @Creator Avik Guha
     ***/
    navigateToParentFrame() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.driver.switchToParentFrame();
        });
    }
    /****** Exit Frames
     ***** Method to exit frames and navigate back to default content
     **** @Creator Avik Guha
     ***/
    exitFrames() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().defaultContent();
        });
    }
}
exports.CommonFunctions_MT = CommonFunctions_MT;
