var user = {
	username: "",
	password: "",

	isLoggedin: function() {
		console.log(this.username + " is logged in.");
	}
}

var darcy = Object.create(user);
darcy.username = "Darcy";

darcy.isLoggedin();

console.log("******************************************************");

var doMath: function(operator, numOne, numTwo) {
	operator = "",
	numOne = "",
	numTwo = "",
}

