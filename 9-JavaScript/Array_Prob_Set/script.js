console.log("CONNECTED");

function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}

function isUniform(arr){
	var i = 0;
	var isUniform = true;

	while(i < arr.length - 1 && isUniform){
		if(arr[i] !== arr[i + 1]){
			isUniform = false;
		}
	}

	return isUniform;
}

function sumArray(arr){
	var sum = 0;

	arr.forEach(function(num){
		sum += num;
	});

	return sum;
}

function max(arr){
	var maxVal = arr[0];

	for(var i = 1; i < arr.length; i++){
		if(arr[i] > maxVal){
			maxVal = arr[i];
		}
	}

	return maxVal;
}

printReverse([1,2,3,4]);
printReverse(["a","b","c","d"]);

isUniform([1,1,1,1]);
isUniform([2,1,1,1]);
isUniform(["a","b","p"]);
isUniform(["b","b","b"]);

sumArray([1,2,3]);
sumArray([10,3,10,4]);
sumArray([-5,100]);

max([1,2,3]);
max([10,3,10,4]);
max([-5,100]);

