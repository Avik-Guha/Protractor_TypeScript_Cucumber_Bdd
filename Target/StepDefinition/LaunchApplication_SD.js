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
const Logger_1 = require("../Utility/Logger");
const Json_Reader_1 = require("../Utility/Json_Reader");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const deferred = protractor_1.protractor.promise.defer();
var path = require('path');
var resource = require(path.resolve('./Resources/index.ts'));
var url = resource.loginurl;
const commonFunctions_MT = new CommonFunctions_MT_1.CommonFunctions_MT();
const json_Reader = new Json_Reader_1.Json_Reader();
cucumber_1.Given('Launch Application', () => __awaiter(void 0, void 0, void 0, function* () {
    yield commonFunctions_MT.launchURL(url),
        '--- Launch application home page ---';
    Logger_1.Logger.log().info('Launch Application');
    // Logger.log().debug('Launch Application')
    // Logger.log().error('Launch Application')
    // Logger.log().fatal('Launch Application')
    yield protractor_1.browser.sleep(2000);
}));
cucumber_1.Given('Read First Name', () => __awaiter(void 0, void 0, void 0, function* () {
    yield commonFunctions_MT.launchURL(url),
        '--- Launch application home page ---';
    json_Reader.read_Json_Data('Register_Details', 'First Name', (result) => {
        console.log('Return value is : ' + result);
    });
}));
