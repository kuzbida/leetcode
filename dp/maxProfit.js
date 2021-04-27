/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (!prices || prices.length < 2) {
        return 0;
    }

    let profit = 0;
    let currentProfit = 0;
    let currentMin = prices[0];
    let currentMax = prices[1];

    for (let i = 0; i < prices.length - 1; i++) {

        if (prices[i] < currentMin) {
            currentMin = prices[i];
            //You want to reset the current max because you're only looking for the days in front of the current min
            currentMax = prices[i + 1];
        }

        if (prices[i + 1] > currentMax) {
            currentMax = prices[i + 1];
        }


        currentProfit = currentMax - currentMin;

        if (currentProfit > profit) {
            profit = currentProfit;
        }

    }

    return profit;
};

var maxProfit1 = function (prices) {
    let left = 0, right = 1;
    let maxProfit = 0;

    while (right < prices.length) {
        const profit = prices[right] - prices[left];
        if (profit > 0) {
            maxProfit = Math.max(profit, maxProfit);
        } else {
            left = right;
        }
        right++;
    }

    return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]) === 5);
console.log(maxProfit([7, 6, 4, 3, 1]) === 0);
console.log(maxProfit([7, 2, 5, 3, 6, 4, 1]) === 4);
console.log(maxProfit([1, 4, 2]) === 3);
console.log(maxProfit([3, 2, 6, 5, 0, 3]) === 4);
console.log(maxProfit([2, 1]) === 0);
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]) === 4);


/*
* Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*
* */