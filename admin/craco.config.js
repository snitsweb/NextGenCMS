const path = require('path')
module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@common': path.resolve(__dirname, 'src/common'),
			'@modules': path.resolve(__dirname, 'src/modules')
		},
	},
}