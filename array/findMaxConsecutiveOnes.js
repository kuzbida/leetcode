/**
 * @param {number[]} nums
 * @return {number}
 */

// [1,1,0,1,1,1]
var findMaxConsecutiveOnes = function (nums) {
    let result = 0;
    let consecutiveOnes = 0;
    nums.forEach((n) => {
        if (n === 1) {
            consecutiveOnes++;
        } else {
            consecutiveOnes = 0;
        }
        if (consecutiveOnes > result) {
            result = consecutiveOnes;
        }
    });

    return result;
};

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1, 0,1,1,1,1,0,1,0,0,1,1,1,1,1,1]));
