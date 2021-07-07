"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const log4js_1 = require("log4js");
log4js_1.configure({
    appenders: {
        app: {
            type: 'file',
            filename: './Logs/test.log',
            alwaysIncludePattern: true,
            pattern: 'yyyyMMdd',
            keepFileExt: true,
            daysToKeep: 1,
            layout: {
                type: 'pattern',
                pattern: '[%d] [%-5p] - %m',
            },
        },
        out: {
            type: 'stdout',
        },
    },
    categories: {
        default: {
            appenders: ['app', 'out'],
            level: 'info',
        },
    },
});
class Logger {
    static log() {
        const logger = log4js_1.getLogger();
        return logger;
    }
}
exports.Logger = Logger;
