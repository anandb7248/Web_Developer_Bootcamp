var response = prompt("What would you like to do?");
var todoList = []

while(response !== "quit"){
	response = prompt("What would you like to do?");

	if(response === "new"){
		newTodo();
	}else if(response === "list") {
		listToDo();
	}else if(response === "delete"){
		deleteToDo();
	}
}

console.log("You quit the program!");

function newTodo(){
	var newTask = prompt("Enter a new todo: ");
	todoList.push(newTask);
	console.log(newTask + " added to the list");
}

function listToDo(){
	console.log("**********");
	todoList.forEach(function(task, index){
		console.log(index + ": " + task);
	});
	console.log("**********");
}

function deleteToDo() {
	var indexDelete = prompt("Enter index of todo to delete");
	todoList.splice(indexDelete,1);
}