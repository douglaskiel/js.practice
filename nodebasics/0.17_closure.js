// closures

// 1. A closure gives you access to the variables set in a function
// 	  after the fundtion has completed and returned.

// 2. Helps keep variables from getting pushed into global scope.
// 3. Deree of protection.  Bariable can't be over written.

var doug = {};

var setAge = function(myAge) {

	var birthday = "7/8/1975";
	return {
		getAge: function() {
			return myAge;
		},

		getBirthday: function() {
			return birthday;
		}
	}

}

doug.age = setAge(41);
console.log(doug.age);
console.log(doug.age.getAge());
console.log(doug.age.birthday);

