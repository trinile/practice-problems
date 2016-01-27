//Use recursion to calculate the factorial of number

//e.g. 5! = 5 x 4 x 3 x 2 x 1 = 120;


var factorial = function(num) {
	if (num === 1) {
		return 1;
	}

	return num * factorial(num-1);
}

console.log(factorial(5));