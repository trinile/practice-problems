//Use recursion to compute base^exp 
//assume exp >= 0;
//base : int or float


var recurPower = function(base, exp) {
	if (exp <= 0) {
		return 1;
	}
	if (exp === 1) {
		return base;
	} 

	return base * recurPower(base, exp - 1);
};
