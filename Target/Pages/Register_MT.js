"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.Register_MT = void 0;
const Register_LO_1 = require("./Register_LO");
const CommonFunctions_MT_1 = require("../Utility/CommonFunctions/CommonFunctions_MT");
const Json_Reader_1 = require("../Utility/Json_Reader");
const register = __importStar(require("../Resources/TestData/Register_Details.json"));
class Register_MT {
    constructor() {
        this.commonFunctions_MT = new CommonFunctions_MT_1.CommonFunctions_MT();
        this.register_LO = new Register_LO_1.Register_LO();
        this.json_Reader = new Json_Reader_1.Json_Reader();
        this.register_json_name = 'Register_Details';
    }
    /**
     * This method is used to enter First Name
     * Read data from Json file
     * @author Avik Guha
     */
    enter_First_Name() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.json_Reader.read_Json_Data(this.register_json_name, 'First Name', (result) => {
                console.log('Return value is : ' + result);
                this.commonFunctions_MT.enterValue(this.register_LO.First_Name_Textbox, result);
            });
        });
    }
    /**
     * This method is used to enter First Name
     * Read data from Json file
     * @author Avik Guha
     */
    enter_Last_Name() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.commonFunctions_MT.enterValue(this.register_LO.Last_Name_Textbox, register.last_name);
        });
    }
    verify_label_in_Name_field() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.commonFunctions_MT.checkValue(this.register_LO.Full_Name_Label, 'Full Name*');
        });
    }
}
exports.Register_MT = Register_MT;
