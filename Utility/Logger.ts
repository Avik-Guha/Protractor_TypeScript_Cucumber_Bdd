import { configure, getLogger } from 'log4js'

configure({
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
})

export class Logger {
	static log(): any {
		const logger = getLogger()
		return logger
	}
}
