const fs = require( 'fs' );
const archiver = require( 'archiver' );

const file = 'dist';
const output = fs.createWriteStream( file + '.zip' );
const archive = archiver( 'zip', {
	zlib: { level: 9 },
} );

output.on( 'close', function () {
	/* eslint-disable no-console */
	console.log( archive.pointer() + ' total bytes' );
	/* eslint-disable no-console */
	console.log(
		'archiver has been finalized and the output file descriptor has closed.'
	);
} );

output.on( 'end', function () {
	/* eslint-disable no-console */
	console.log( 'Data has been drained' );
} );

archive.on( 'warning', function ( err ) {
	if ( err.code === 'ENOENT' ) {
		/* eslint-disable no-console */
		console.warn( err );
	} else {
		throw err;
	}
} );

archive.on( 'error', function ( err ) {
	throw err;
} );

archive.pipe( output );

archive.directory( file );

archive.finalize();
