/*
* Runtime complexity is O(2**N)
* Where 2 - is number of branches
* N is number
*
* Memory (space) complexity is O(N)
* */


function f(n) {
	if (n < 1) {
		return 1;
	}
	return f(n - 1) + f(n - 1);
}

f(4);


/*
Runtime complexity is O(4**N)
function f(n) {
	if (n < 1) {
		return 1;
	}
	return f(n - 1) + f(n - 1) + f(n - 1) + f(n - 1);
}
*/



