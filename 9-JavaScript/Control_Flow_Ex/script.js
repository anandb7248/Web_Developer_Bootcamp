var age = Number(prompt("What is your age?"));

if(age < 0) {
	alert("Age can't be negative");
}else if(age == 21){
	alert("Happy 21st Birthday!");
}else if(age % 2 == 1){
	alert("Your age is odd!");
}else if(age % Math.sqrt(age) === 0){
	alert("Your age is a perfect square!");
}