const path = require( 'path' );

module.exports = {
	entry: './js/index.js',
	devtool: 'eval',
	output: {
		path: path.resolve( __dirname, './build' ),
		filename: 'maps.js'
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loader: 'eslint',
				exclude: [ /node_modules/ ],
			}
		],
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					presets: [ 'react', 'es2015' ]
				}
			}
		]
	},
	eslint: {
		configFile: path.join( __dirname, '.eslintrc' ),
		failOnError: true,
		quiet: true,
	}
};
