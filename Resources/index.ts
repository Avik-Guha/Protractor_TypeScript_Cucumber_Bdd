const NODE_ENV = process.env.NODE_ENV
var path = require('path')

console.log('**' + NODE_ENV + '**')

switch (NODE_ENV) {
	case 'dev':
		console.log('**' + 'This is for Dev' + '**')

		var loginUrl = 'http://zero.webappsecurity.com/login.html'

		var admin_id = 'username_Dev'
		var admin_password = 'password_Dev'

		break

	case 'qa':
		console.log('**' + 'This is for QA' + '**')

		var loginUrl = 'http://demo.automationtesting.in/Register.html'

		var admin_id = 'username'
		var admin_password = 'password'

		break

	default:
		console.error('Unrecognised NODE_ENV: ' + process.env.NODE_ENV)
		process.exit(1)
}

module.exports = {
	loginurl: loginUrl,
	admin_Id: admin_id,
	admin_Password: admin_password,
	//somemoredata: someMoreData
}
