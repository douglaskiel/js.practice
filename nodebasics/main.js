var player = require("./player.js");
var monster = require("./monster.js");

var meany = monster();
var paul = player();
paul.name = "Paul";
console.log(paul.name);

var ben = player();
ben.name = "Ben";
console.log(ben.name);

//dot equals
// player.name = "Lindsey";
// player.life = 100;
// player.challenge();