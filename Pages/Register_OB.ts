import { BasePage } from '../Utility/Identification/BasePage_EL'
import { IdentificationType } from '../Utility/Identification/BasePage_EN'

const Locators = {
	First_Name_Textbox: {
		name: 'First Name Textbox - value',
		type: IdentificationType[IdentificationType.Css],
		value: '#basicBootstrapForm > div:nth-child(1) > div:nth-child(2) > input',
	},
	Last_Name_Textbox: {
		name: 'Last Name Textbox - value',
		type: IdentificationType[IdentificationType.Css],
		value: '#basicBootstrapForm > div:nth-child(1) > div:nth-child(3) > input',
	},
	Full_Name_Label: {
		name: 'Full Name Label - value',
		type: IdentificationType[IdentificationType.Css],
		value: '#basicBootstrapForm > div:nth-child(1) > label',
	},
}

export class Register_LO extends BasePage {
	First_Name_Textbox = this.ElementLocator(Locators.First_Name_Textbox)
	Last_Name_Textbox = this.ElementLocator(Locators.Last_Name_Textbox)
	Full_Name_Label = this.ElementLocator(Locators.Full_Name_Label)
}
