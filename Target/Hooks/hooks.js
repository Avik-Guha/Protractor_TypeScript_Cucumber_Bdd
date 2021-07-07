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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const cucumber_1 = require("@cucumber/cucumber");
//This will set default timeout from 5000 to new
cucumber_1.setDefaultTimeout(60000);
// This hook will be executed before all scenarios
cucumber_1.Before(function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.ignoreSynchronization = true; //for non-angular websites
    });
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, 'image/png');
        }
        protractor_1.browser.executeScript('window.sessionStorage.clear();');
        protractor_1.browser.executeScript('window.localStorage.clear();');
    });
});
