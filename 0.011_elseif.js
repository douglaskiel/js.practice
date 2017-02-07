var stopLight = "yellow";

if (stopLight === "red") {
	console.log("Stop");
} else if (stopLight !== "red" && stopLight === "yellow") {
	console.log("Caution!");
} else if ( stopLight !== "yellow" && stopLight === "green") {
	console.log("Go!")
}

var myNum = 13;

if (myNum === 20) {
	console.log("You are close to guessing my Number.");
} else if (myNum <= 19) {
	console.log("You are lower than my Number.");
} else if (myNum >= 21) {
	console.log("You are getting too High!");
} else {
	console.log("You got my Number!");
}