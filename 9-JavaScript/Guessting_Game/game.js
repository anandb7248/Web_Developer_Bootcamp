// Create secret number
var secretNumber = Math.floor((Math.random() * 100) + 1);
var guessedRight = false;

while(!guessedRight){
	var guess = Number(prompt("Guess a number between 1 and 100"));

	if(guess === secretNumber){
		alert("YOU GOT IT RIGHT!!!");
		guessedRight = true;
	}else if(guess > secretNumber){
		alert("Your guess is too high!");
	}else{
		alert("You guess is too low!");
	}
}
