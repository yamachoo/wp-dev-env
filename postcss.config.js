module.exports = {
	plugins: [
		require( 'autoprefixer' ),
		require( 'node-css-mqpacker' )( {
			sort: true,
		} ),
		require( 'postcss-mq-optimize' ),
		require( 'cssnano' )( {
			preset: 'default',
		} ),
	],
};
