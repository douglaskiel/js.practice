// num++ = num = num +1
function loop(times_to_loop){
	console.log("we are looping " + times_to_loop + " times.")
	for (num = 0; num <= times_to_loop; num++) {
		console.log(num);
	}
}
console.log("*----------------------------------------------------------*");

// "for (;;) { }" // this is capable of happening even though it doesn't mean anything
// the above for loop will never fail because it has no conditional to stop it

	// first expression is the initial clause
	// second expression is the conditional or test clause
	// third expression is the update clause
for (a = 5; a < 10; a = a + 1) {
	 			//	a = a + 1 === a++ these are the same. 
	 			// adding  a = 6; will make it run forever 
	 			// because "a" will always go back to 6 changing to 7 again
	console.log(a);
}
// a loop runs until something is false


console.log("*----------------------------------------------------------*");
// loop();		

// loop(90);

var x = function(y) {
	return y + 3; 
}

console.log(x(576));

var logx = function(y){
	console.log(x(y));
}

logx(982346);