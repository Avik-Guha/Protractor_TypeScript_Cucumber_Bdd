"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
const protractor_1 = require("protractor");
const BasePage_EN_1 = require("./BasePage_EN");
class BasePage {
    ElementLocator(locator) {
        switch (locator.type) {
            case BasePage_EN_1.IdentificationType[BasePage_EN_1.IdentificationType.Xpath]:
                return protractor_1.element(protractor_1.by.xpath(locator.value));
            case BasePage_EN_1.IdentificationType[BasePage_EN_1.IdentificationType.Css]:
                return protractor_1.element(protractor_1.by.css(locator.value));
            case BasePage_EN_1.IdentificationType[BasePage_EN_1.IdentificationType.Id]:
                return protractor_1.element(protractor_1.by.id(locator.value));
            case BasePage_EN_1.IdentificationType[BasePage_EN_1.IdentificationType.href]:
                return protractor_1.element(protractor_1.by.linkText(locator.value));
            default:
                break;
        }
    }
    ElementArrayLocator(locator) {
        switch (locator.type) {
            case BasePage_EN_1.IdentificationType[BasePage_EN_1.IdentificationType.XpathAll]:
                return protractor_1.element.all(protractor_1.by.xpath(locator.value));
            case BasePage_EN_1.IdentificationType[BasePage_EN_1.IdentificationType.CssAll]:
                return protractor_1.element.all(protractor_1.by.css(locator.value));
            default:
                break;
        }
    }
}
exports.BasePage = BasePage;
