"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register_LO = void 0;
const BasePage_EL_1 = require("../Utility/Identification/BasePage_EL");
const BasePage_EN_1 = require("../Utility/Identification//BasePage_EN");
const Locators = {
    First_Name_Textbox: {
        name: 'First Name Textbox - value',
        type: BasePage_EN_1.IdentificationType[BasePage_EN_1.IdentificationType.Css],
        value: '#basicBootstrapForm > div:nth-child(1) > div:nth-child(2) > input',
    },
    Last_Name_Textbox: {
        name: 'Last Name Textbox - value',
        type: BasePage_EN_1.IdentificationType[BasePage_EN_1.IdentificationType.Css],
        value: '#basicBootstrapForm > div:nth-child(1) > div:nth-child(3) > input',
    },
    Full_Name_Label: {
        name: 'Full Name Label - value',
        type: BasePage_EN_1.IdentificationType[BasePage_EN_1.IdentificationType.Css],
        value: '#basicBootstrapForm > div:nth-child(1) > label',
    },
};
class Register_LO extends BasePage_EL_1.BasePage {
    constructor() {
        super(...arguments);
        this.First_Name_Textbox = this.ElementLocator(Locators.First_Name_Textbox);
        this.Last_Name_Textbox = this.ElementLocator(Locators.Last_Name_Textbox);
        this.Full_Name_Label = this.ElementLocator(Locators.Full_Name_Label);
    }
}
exports.Register_LO = Register_LO;
