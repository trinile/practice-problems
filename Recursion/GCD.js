var gcdRecur = function(a,b) {
	if (b === 0) {
		return a;
	}

	return gcdRecur(b,a % b) 
}

gcdRecur(14,26); //2