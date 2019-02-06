// 1.
var problemOne = -10;
console.log("Print all numbers between -10 and 19");
while(problemOne <= 19){
	console.log(problemOne++);
}

// 2.
var problemTwo = 10;
console.log("Print all even numbers between 10 and 40");
while(problemTwo <= 40){
	if(problemTwo % 2 === 0){
		console.log(problemTwo);
	}
	problemTwo++;
}

// 3.
var problemThree = 300;
console.log("Print all odd numbers between 300 and 333");
while(problemThree <= 333){
	if(problemThree % 2 === 1){
		console.log(problemThree);
	}
	problemThree++;
}

// 4.
var problemFour = 5;
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
while(problemFour <= 50){
	if(problemFour % 5 === 0 && problemFour % 3 ===0){
		console.log(problemFour);
	}
	problemFour++;
}