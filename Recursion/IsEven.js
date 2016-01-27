//Use Recursion to check if number is even or not


var isEven = function(num) {
	if (num === 0) {
		return true;
	}

	if (num === 1) {
		return false;
	}

	return isEven(num-2);
}

isEven(4); //true
isEven(3); //false 
