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
exports.Json_Reader = void 0;
const fs = require('fs');
const register_details_json_path = './Resources/TestData/Register_Details.json';
class Json_Reader {
    /**
     * This method is used to read data from Json file
     * @author Avik Guha
     */
    read_Json_Data(json_name, object_name, cb) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (json_name) {
                case 'Register_Details': {
                    fs.readFile(register_details_json_path, 'utf8', (err, jsonString) => {
                        if (err) {
                            console.log('Error reading file from disk:', err);
                            return;
                        }
                        try {
                            const register = JSON.parse(jsonString);
                            if (object_name.toLowerCase() == 'first name') {
                                console.log('First Name is:', register.first_name);
                                var value = register.first_name;
                            }
                            else if (object_name.toLowerCase() == 'last name') {
                                console.log('Last Name is:', register.last_name);
                                var value = register.last_name;
                            }
                            cb(value);
                        }
                        catch (err) {
                            console.log('Error parsing JSON string:', err);
                        }
                    });
                    break;
                }
                default: {
                    console.log('Enter correct Json file name');
                    break;
                }
            }
        });
    }
}
exports.Json_Reader = Json_Reader;
