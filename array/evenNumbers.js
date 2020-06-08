/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let result = 0;

    nums.forEach((n) => {
        if (n.toString().length % 2 === 0) {
            result++;
        }
    });

    return result;
};

console.log(findNumbers([12,345,2,6,7896, 123, 541, 0, 33]));
