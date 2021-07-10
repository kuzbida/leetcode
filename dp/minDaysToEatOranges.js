/**
 * @param {number} n
 * @return {number}
 */
var minDays = function (n) {
    const dp = {0: 0, 1: 1};

    function dfs(n) {
        if (dp[n] !== undefined) {
            return dp[n]
        }

        const a = 1 + n % 2 + dfs(Math.floor(n / 2));
        const b = 1 + n % 3 + dfs(Math.floor(n / 3));

        dp[n] = Math.min(a, b);

        return dp[n];
    }

    return dfs(n);
};

console.log(minDays(10));
console.log(minDays(6));
console.log(minDays(1));
console.log(minDays(56));


/*
*
* Example 1:

Input: n = 10
Output: 4
Explanation: You have 10 oranges.
Day 1: Eat 1 orange,  10 - 1 = 9.
Day 2: Eat 6 oranges, 9 - 2*(9/3) = 9 - 6 = 3. (Since 9 is divisible by 3)
Day 3: Eat 2 oranges, 3 - 2*(3/3) = 3 - 2 = 1.
Day 4: Eat the last orange  1 - 1  = 0.
You need at least 4 days to eat the 10 oranges.


Example 2:

Input: n = 6
Output: 3
Explanation: You have 6 oranges.
Day 1: Eat 3 oranges, 6 - 6/2 = 6 - 3 = 3. (Since 6 is divisible by 2).
Day 2: Eat 2 oranges, 3 - 2*(3/3) = 3 - 2 = 1. (Since 3 is divisible by 3)
Day 3: Eat the last orange  1 - 1  = 0.
You need at least 3 days to eat the 6 oranges.


Example 3:

Input: n = 1
Output: 1


Example 4:

Input: n = 56
Output: 6
* */