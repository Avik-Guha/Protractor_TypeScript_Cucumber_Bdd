import { Register_LO } from './Register_LO'
import { CommonFunctions_MT } from '../Utility/CommonFunctions/CommonFunctions_MT'
import { Json_Reader } from '../Utility/Json_Reader'
import * as register from '../Resources/TestData/Register_Details.json'

export class Register_MT {
	commonFunctions_MT = new CommonFunctions_MT()
	register_LO = new Register_LO()
	json_Reader: Json_Reader = new Json_Reader()

	register_json_name: string = 'Register_Details'

	/**
	 * This method is used to enter First Name
	 * Read data from Json file
	 * using Utility method
	 * @author Avik Guha
	 */
	public async enter_First_Name() {
		let value: string | number

		await this.json_Reader
			.read_Json_Data(this.register_json_name, 'First Name')
			.then((x) => {
				value = x
			})

		await this.commonFunctions_MT.enterValue(
			this.register_LO.First_Name_Textbox,
			value
		)
	}

	/**
	 * This method is used to enter First Name
	 * Read data from Json file
	 * @author Avik Guha
	 */
	public async enter_Last_Name() {
		await this.commonFunctions_MT.enterValue(
			this.register_LO.Last_Name_Textbox,
			register.last_name
		)
	}

	public async verify_label_in_Name_field() {
		await this.commonFunctions_MT.checkValue(
			this.register_LO.Full_Name_Label,
			'Full Name*'
		)
	}
}
