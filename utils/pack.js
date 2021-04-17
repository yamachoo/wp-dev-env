const fs = require( 'fs-extra' );
const globby = require( 'globby' );

const file = 'dist';

fs.copySync( 'assets', `${ file }/assets` );

const phps = globby.sync( '*.php' );

for ( const php of phps ) {
	fs.copyFileSync( php, `${ file }/${ php }` );
}
