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
const cucumber_1 = require("@cucumber/cucumber");
const CommonFunctions_MT_1 = require("../Utility/CommonFunctions/CommonFunctions_MT");
const protractor_1 = require("protractor");
const Register_MT_1 = require("../Pages/Register_MT");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const deferred = protractor_1.protractor.promise.defer();
const register_MT = new Register_MT_1.Register_MT();
const commonFunctions_MT = new CommonFunctions_MT_1.CommonFunctions_MT();
cucumber_1.When('User enters First Name in Registration page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield register_MT.enter_First_Name();
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.Then('Verify label in Name field', () => __awaiter(void 0, void 0, void 0, function* () {
    yield register_MT.verify_label_in_Name_field();
}));
cucumber_1.When('User enters Last Name in Registration page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield register_MT.enter_Last_Name();
    yield protractor_1.browser.sleep(2000);
}));
