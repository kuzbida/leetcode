/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {

    if (amount === 0) {
        return 0;
    }


    function dfs(coins, amount, result) {
        let max = 0;
        for (let i = 0; i < coins.length; i++) {
            if (coins[i] <= amount && coins[i] > max) {
                max = coins[i]
            }
        }

        if (max === 0) {
            return -1;
        }

        const extra = amount % max;
        const addCoins = Math.floor(amount / max);

        if (extra === 0) {
            return result + addCoins;
        }

        return dfs(coins, extra, result + addCoins)
    }

    return dfs(coins, amount, 0);
};

// console.log(coinChange([1, 2, 5], 11))
// console.log(coinChange([2], 3))
// console.log(coinChange([1], 0))
// console.log(coinChange([1], 1))
// console.log(coinChange([1], 2))
console.log(coinChange([2, 3, 5], 11))

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