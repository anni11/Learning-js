/*iife are instantly invoked function expressions*/

// this doesn't work
/*
function () {
	console.log('hello');
}();
*/

( function () {
	console.log('hello');
} )();

// helpful in controlling variable scope