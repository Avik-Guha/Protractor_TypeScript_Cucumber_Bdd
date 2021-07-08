import * as register_details_data from '../Resources/TestData/Register_Details.json'

export class Json_Reader {
	/**
	 * This method is used to read data from Json file
	 * @author Avik Guha
	 */
	public async read_Json_Data(json_name: string, object_name: string) {
		var value: string | number
		switch (json_name) {
			case 'Register_Details': {
				if (object_name.toLowerCase() == 'first name') {
					value = register_details_data.first_name
				} else if (object_name.toLowerCase() == 'last name') {
					value = register_details_data.last_name
				}
				return value
			}
			default: {
				console.log('Enter correct Json file name')
				break
			}
		}
	}
}
