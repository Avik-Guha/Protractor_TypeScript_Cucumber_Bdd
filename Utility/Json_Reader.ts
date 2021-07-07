const fs = require('fs')

const register_details_json_path = './Resources/TestData/Register_Details.json'

export class Json_Reader {
	/**
	 * This method is used to read data from Json file
	 * @author Avik Guha
	 */
	public async read_Json_Data(
		json_name: string,
		object_name: string,
		cb: (str: string) => void
	) {
		switch (json_name) {
			case 'Register_Details': {
				fs.readFile(
					register_details_json_path,
					'utf8',
					(err, jsonString) => {
						if (err) {
							console.log('Error reading file from disk:', err)
							return
						}
						try {
							const register = JSON.parse(jsonString)

							if (object_name.toLowerCase() == 'first name') {
								console.log(
									'First Name is:',
									register.first_name
								)
								var value = register.first_name
							} else if (
								object_name.toLowerCase() == 'last name'
							) {
								console.log('Last Name is:', register.last_name)
								var value = register.last_name
							}
							cb(value)
						} catch (err) {
							console.log('Error parsing JSON string:', err)
						}
					}
				)

				break
			}
			default: {
				console.log('Enter correct Json file name')
				break
			}
		}
	}
}
