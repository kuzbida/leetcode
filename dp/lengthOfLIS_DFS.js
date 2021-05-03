function traverse(index, nums, cache, subseq) {
    if (cache[index] !== 0) {
        cache[index] = Math.max(cache[index], subseq.length);
        return cache[index];
    }

    cache[index] = 1;

    for (let i = index - 1; i >= 0; i--) {
        console.log('nums[i]', nums[i]);
        console.log('cache', cache);
        console.log('subseq', subseq);
        console.log('=============');
        if (nums[i] < subseq[0]) {
            const newSubSeq = [nums[i], ...subseq];
            cache[index] = Math.max(cache[index], newSubSeq.length);
            traverse(i, nums, cache, newSubSeq)
        }
    }

}

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (nums.length < 2) {
        return nums.length;
    }

    const cache = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        cache.push(traverse(i, nums, new Array(nums.length).fill(0), [nums[i]]));
    }

    return Math.max(...cache);
};

console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]));
// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
// console.log(lengthOfLIS([0,1,0,3,2,3]));
// console.log(lengthOfLIS([7,7,7,7,7,7,7]));
// console.log(lengthOfLIS([1]));
// console.log(lengthOfLIS([10, 2, 4, 1]));
// console.log(lengthOfLIS([5, 7, -24, 12, 13, 2, 3, 12, 5, 6, 35]));

/*
* Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4

Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1
* */