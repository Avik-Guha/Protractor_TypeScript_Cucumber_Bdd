"use strict";
/**
     * This class is used to select and test drop-downs in page layout
     * @author Avik Guha
     *
     */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const protractor_1 = require("protractor");
var EC = protractor_1.protractor.ExpectedConditions;
class Select {
    /**
     * This method is used to click on drop-down button
     * @author Avik Guha
     *
     */
    clickDropdown(dropdown) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dropdown.click();
            //await browser.sleep(9000);
        });
    }
    isMultiple(dropdown, visibleText) {
        console.log("returning all options  : " + visibleText);
        // select the option
        dropdown.getAttribute("multiple").then(function (multipleOrNot) {
            if (multipleOrNot) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    getOptions(dropdown, visibleText) {
        console.log("returning all options  : " + visibleText);
        // select the option
        dropdown.all(protractor_1.by.css("option"));
    }
    selectByVisibleText(dropdown, visibleText) {
        return __awaiter(this, void 0, void 0, function* () {
            yield console.log("Selecting element based text  : " + visibleText);
            // select the option
            yield dropdown.element(protractor_1.by.xpath("//option[contains(text(), '" + visibleText + "')]")).click();
            yield protractor_1.browser.sleep(1000);
        });
    }
    selectMultipleByVisibleText(dropdown, visibleText) {
        return __awaiter(this, void 0, void 0, function* () {
            const x = visibleText.length;
            yield protractor_1.browser.actions().keyDown(protractor_1.protractor.Key.CONTROL).perform();
            // select the option
            for (let i = 0; i < x; i++) {
                const valueToSelect = visibleText[i];
                yield dropdown.element(protractor_1.by.xpath("//option[contains(text(), '" + valueToSelect + "')]")).click();
            }
            //await browser.sleep(1000);
        });
    }
    selectByValue(dropdown, valueToSelect) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Selecting element based value  : " + valueToSelect);
            // select the option
            yield dropdown.element(protractor_1.by.xpath("//option[@value='" + valueToSelect + "']")).click();
            //await dropdown.element(by.css("option[value='"+value+"']")).click();
            //await browser.sleep(9000);
        });
    }
    selectMultipleByValue(dropdown, value) {
        return __awaiter(this, void 0, void 0, function* () {
            const x = value.length;
            yield protractor_1.browser.actions().keyDown(protractor_1.protractor.Key.CONTROL).perform();
            // select the option
            for (let i = 0; i < x; i++) {
                const valueToSelect = value[i];
                yield dropdown.element(protractor_1.by.xpath("//option[@value='" + valueToSelect + "']")).click();
            }
            //await browser.sleep(1000);
        });
    }
    selectByIndex(dropdown, index) {
        index = index + 1;
        console.log("Selecting element based index : " + index);
        // select the option
        dropdown.element(protractor_1.by.css("option:nth-child(" + index + ")")).click();
    }
}
exports.Select = Select;
