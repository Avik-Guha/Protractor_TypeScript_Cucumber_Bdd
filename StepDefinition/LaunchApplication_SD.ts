import { Given, When, Then } from '@cucumber/cucumber'
import { CommonFunctions_MT } from '../Utility/CommonFunctions/CommonFunctions_MT'
import { protractor, browser } from 'protractor'
import { Logger } from '../Utility/Logger'
import { Json_Reader } from '../Utility/Json_Reader'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const expect = chai.expect
const deferred = protractor.promise.defer()

var path = require('path')
var resource = require(path.resolve('./Resources/index.ts'))

var url = resource.loginurl

const commonFunctions_MT: CommonFunctions_MT = new CommonFunctions_MT()
const json_Reader: Json_Reader = new Json_Reader()

Given('Launch Application', async () => {
	await commonFunctions_MT.launchURL(url),
		'--- Launch application home page ---'
	Logger.log().info('Launch Application')
	// Logger.log().debug('Launch Application')
	// Logger.log().error('Launch Application')
	// Logger.log().fatal('Launch Application')

	await browser.sleep(2000)
})

Given('Read First Name', async () => {
	await commonFunctions_MT.launchURL(url),
		'--- Launch application home page ---'

	json_Reader.read_Json_Data('Register_Details', 'First Name', (result) => {
		console.log('Return value is : ' + result)
	})
})
