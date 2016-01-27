//Write a JavaScript program to compute the 
//sum of an array of integers. Go to the editor

//Example : var array = [1, 2, 3, 4, 5, 6]
//Expected Output : 21 

var sum = function(arr) {

	if (arr.length === 1) {
		return arr[0];
	}

	var temp = arr.pop();
	arr[0] = temp + arr[0];

	return sum(arr);
}

console.log(sum([1, 2, 3, 4, 5, 6])); //21
console.log(sum([1,2,3])); //6