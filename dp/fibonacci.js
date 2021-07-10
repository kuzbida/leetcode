/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n < 2) {
        return n;
    }


    let dp0 = 0;
    let dp1 = 1;

    for (let i = 1; i < n; i++) {
        const temp = dp1;
        dp1 = dp1 + dp0;
        dp0 = temp;
    }

    return dp1
};

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));