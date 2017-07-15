
const nprid = require( "./nprid.js" );
const assert = require( "assert" );

//: note: Please open chrome before testing.
assert.equal( nprid( "chrome", true ).length != 0, true, "should not be empty" );

nprid( "chrome" )( function done( error, pid ){
	assert.equal( pid.length != 0, true, "should not be empty" );

	console.log( "ok" );
} );

assert.equal( nprid( "xxx", true ).length == 0, true, "should be empty" );

nprid( "xxx" )( function done( error, pid ){
	assert.equal( pid.length == 0, true, "should be empty" );

	console.log( "ok" );
} );

console.log( "ok" );
