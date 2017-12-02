
$ (document).ready(function(){
	var randomNumber = 0
	var userScore = 0
	var losses = 0
	var wins = 0
	var crystal1 = 0
	var crystal2 = 0
	var crystal3 = 0
	var crystal4 = 0




//RANDOM CRYSTAL NUMBERS 
//create a random number (between 1 and 12) for each crystal at the beginning of the game
// the number associate with each crystal is hidden to the player until 
//the crystal is clicked and the number is added to the total score
//======================================================================================
	var startGame = function () {

		crystal1 = Math.floor(Math.random() * 11) +1;
		crystal2 = Math.floor(Math.random() * 11) +1;
		crystal3 = Math.floor(Math.random() * 11) +1;
		crystal4 = Math.floor(Math.random() * 11) +1;

//RANDOM NUMBER- Create a random number to generate at the beginning of each game, between 19 and 120
		randomNumber = Math.floor(Math.random() * 100) + 20;
		$("#randomNumber").html("Random Number: " + randomNumber);
	

		userScore = 0
		console.log(randomNumber);
		console.log(crystal1);
		console.log(crystal2);
		console.log(crystal3);
		console.log(crystal4);

};

startGame();

$("#bluecrystal").click(function(){
	userScore = userScore + crystal1;
	$("#userScore").html("Your total score is:" + userScore);
	compare();
});

$("#greencrystal").click(function(){
	userScore = userScore + crystal2;
	$("#userScore").text("Your total score is: " + userScore);
	compare();
});

$("#redcrystal").click(function(){
	userScore = userScore + crystal3;
	$("#userScore").text("Your total score is: " + userScore);
	compare();
});

$("#yellowcrystal").click(function(){
	userScore = userScore + crystal4;
	$("#userScore").text("Your total score is: " + userScore);
	compare();
});

//TOTAL SCORE- Each time a crystal is clicked, the number for that crystal should be added 
//to the total score until it equals the random number and win or you go over the number and lose
	$("#userScore").html("Your total score is: " + userScore);

//Every time you click a crystal, compare to the random score. 
	//if the total score is equal to the randomNumber, YOU WIN
var compare = function(){

	//If the total score is more than the randomNumber, YOU LOSE
if(userScore > randomNumber) {
	$("#alert").text("Sorry, you lost.");
	losses++
	$("#losses").text(losses);
	startGame()
}

	//WINS AND LOSES- Each time the player wins or loses, log the score
if(userScore === randomNumber) {
	$("#alert").text("YOU WON!");
	wins++
	$("#wins").text(wins);
	startGame()
}

};



});