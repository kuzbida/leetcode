/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {

    if (amount === 0) {
        return 0;
    }

    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let a = 1; a <= amount; a++) {
        for (let c = 0; c < coins.length; c++) {
            console.log(dp);
            const coin = coins[c];
            if (a - coin >= 0) {
                dp[a] = Math.min(dp[a], 1 + dp[a - coin])
            }
        }
        console.log('==========')
    }

    return dp[amount] !== Infinity ? dp[amount] : -1;
};

console.log(coinChange([1, 2, 5], 11))
// console.log(coinChange([2], 3))
// console.log(coinChange([1], 0))
// console.log(coinChange([1], 1))
// console.log(coinChange([1], 2))
// console.log(coinChange([2, 3, 5], 11))

/*
* Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
Example 4:

Input: coins = [1], amount = 1
Output: 1
Example 5:

Input: coins = [1], amount = 2
Output: 2
* */