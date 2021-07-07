import { Given, When, Then } from '@cucumber/cucumber'
import { CommonFunctions_MT } from '../Utility/CommonFunctions/CommonFunctions_MT'
import { protractor, browser } from 'protractor'
import { Register_MT } from '../Pages/Register_MT'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const expect = chai.expect
const deferred = protractor.promise.defer()

const register_MT: Register_MT = new Register_MT()
const commonFunctions_MT: CommonFunctions_MT = new CommonFunctions_MT()

When('User enters First Name in Registration page', async () => {
	await register_MT.enter_First_Name()
	await browser.sleep(2000)
})

Then('Verify label in Name field', async () => {
	await register_MT.verify_label_in_Name_field()
})

When('User enters Last Name in Registration page', async () => {
	await register_MT.enter_Last_Name()
	await browser.sleep(2000)
})
