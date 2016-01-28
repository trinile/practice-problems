
//use recursion to determine whether a string is a palindrome

var isPal = function(str) {

	var isChar = function(str) {
		var str = str.toLowerCase();
		result ="";
		var letters = /^[a-z]$/
		for (var i = 0; i < str.length; i++) {
			if (letters.test(str[i])) {
				result += str[i];
			}
		}
// 		console.log(result);
		return result;
	}
	
	var pal = function(str) {
	   // console.log(str);
	    if (str.length <= 1) {
	        return true;
	    }
	    else if (str[0] === str[str.length-1]) {
	        return pal(str.slice(1,str.length-1));
	    } else {
	        return false;
	    }
	}
	return pal(isChar(str));
}


var str = "Able was I ere I saw Elba";
console.log(isPal(str)); //true
console.log(isPal("ABCCBA")); //true
console.log(isPal('I\'m not a palindrome')); //false
