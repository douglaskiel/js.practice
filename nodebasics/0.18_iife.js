// IIFE - immediately invoked functional expressions
// We create and use functional expressions all the time!

var greeting = function(name) {
	console.log("Hello" + name);
}("James");

var printValue = (function(value) {
	console.log(value);
})(0987654);

// greeting ("Abby");