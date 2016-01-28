//use recursion to determine the length of an input string

var len = function(str) {

	if (str === '') {
		return 0;
	}
	if (str.slice(0) === str[0]) {
		return 1;
	}

	return 1 + len(str.slice(1));
}

var str = "hi there buddy, how are you";

console.log(len(str)); //27
console.log(len(str) === str.length); //true