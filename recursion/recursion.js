// Difference between tail and normal recursion

// Normal recursion
function recFactorial(x) {
    if (x <= 1) {
        return 1;
    } else {
        return x * recFactorial(x - 1);
    }
}

// Tail Recursion
function tailFactorial(x, totalSoFar = 1) {
    if (x === 0) {
        return totalSoFar;
    } else {
        return tailFactorial(x - 1, totalSoFar * x);
    }
}

// The main difference is that tail recursion has O(1) space complexity compared to O(n) in case with normal recursion
// The reason is that in case with normal recursion engine waits for result of recursion function and doesn't pop previous function call from stack.
// On current moment JS engine doesn't support tail recursion.
// https://2ality.com/2015/06/tail-call-optimization.html