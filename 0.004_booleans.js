// booleans are true and false, yes and no statements
var nottrue = 1 != "1";
var yes = 1 == "1";
var no = 1 === "1";

console.log(nottrue);
console.log(true);
console.log(false);

var friend = true;
var notfriend = false;

// passwords are a good example of booleans
var iLikeMeat = true
console.log(iLikeMeat);

console.log(10 < 11);
console.log(14 > 78);
console.log(7 >= 7);
console.log(99 < 99);
// 22 is a different value than "22", but 
// the number 22 is never expressed in a 
// string form.
console.log(22 < "22");

console.log(Boolean("hello"));

var password = true;
if (password) {
	console.log("accept");
} else {
	console.log("try again");
}

var password = false;
if (password) {
	console.log("try again");
} else {
	console.log("hate");
}