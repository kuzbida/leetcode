/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*var threeSum = function (nums) {

    const result = [];
    const usedIdxs = {};

    const map = {};

    for (let i = nums.length - 1; i >= 0; i--) {
        if (!map[nums[i]]) {
            map[nums[i]] = [i]
        } else {
            map[nums[i]].push(i);
        }
    }

    function getIdx(numToFind, j) {
        return map[numToFind] && map[numToFind][0];
        /!*const idx = map[numToFind] && map[numToFind].length > 0 && map[numToFind].pop() || undefined;

        if (idx === undefined) return idx;

        if (idx <= j) return getIdx(numToFind, j);

        return idx;*!/
    }

    function setUsed(i, j, k) {
        const a = nums[i],
            b = nums[j],
            c = nums[k];

        usedIdxs[`${a}${b}${c}`] = true;
        usedIdxs[`${a}${c}${b}`] = true;
        usedIdxs[`${b}${a}${c}`] = true;
        usedIdxs[`${b}${c}${a}`] = true;
        usedIdxs[`${c}${b}${a}`] = true;
        usedIdxs[`${c}${a}${b}`] = true;

        // console.log('setUsed', usedIdxs)
    }

    // let prev = result.length;
    for (let i = 0; i < nums.length - 2; i++) {

        for (let j = i + 1; j < nums.length - 1; j++) {
            const numToFind = -(nums[i] + nums[j]);

            for (let k = j + 1; k < nums.length; k++) {
                if (nums[k] === numToFind && !usedIdxs[`${nums[i]}${nums[j]}${nums[k]}`]) {
                    setUsed(i, j, k);

                    result.push([nums[i], nums[j], nums[k]]);
                }
            }
            // const k = getIdx(numToFind, j);
            //
            // if (k !== undefined && !usedIdxs[`${nums[i]}${nums[j]}${nums[k]}`]) {
            //     setUsed(i, j, k);
            //
            //     result.push([nums[i], nums[j], nums[k]]);
            // }
        }

    }

    console.log(result.length);


    return result;
};*/
var threeSum = function (nums) {
    nums.sort((a, b) => {
        if (a > b) {
            return 1
        } else if (a < b) {
            return -1
        } else {
            return 0
        }
    });
    console.log('sorted', nums);

    const result = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let l = i + 1,
            r = nums.length - 1;

        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];

            if (sum > 0) {
                r--;
            } else if (sum < 0) {
                l++;
            } else {
                result.push([nums[i], nums[l], nums[r]]);
                l++;
                while (nums[l] === nums[l - 1] && l < r) {
                    l++;
                }
            }
        }
    }

    console.log(result.length);

    return result;
};

/*
* Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []

* */

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([]))
console.log(threeSum([-2, 0, 0, 2, 2]))
console.log(threeSum([-10, -7, -3, -9, -8, -9, -5, 6, 0, 6, 4, -15, -12, 3, -12, -10, -5, -5, 2, -4, 13, 8, -9, 6, -11, 11, 3, -13, -3, 14, -9, 2, 14, -5, 8, -9, -7, -12, 5, 1, 2, -6, 1, 5, 4, -4, 3, 7, -2, 12, 10, -3, 6, -14, -12, 10, 12, 7, 12, -14, -2, 11, 4, -10, 13, -11, -4, -8, -15, -14, 8, -6, -12, -14, 6, 7, -3, -14, -1, 11, 14, -6, -15, 5, -13, -12, 0, 14, 2, -11, -14, 8, -15, -3, 13, 14, -7, -14, 13, -15, 10, -2, -14, 13]))

var expected = [[-15, 1, 14], [-15, 2, 13], [-15, 3, 12], [-15, 4, 11], [-15, 5, 10], [-15, 7, 8], [-14, 0, 14], [-14, 1, 13], [-14, 2, 12], [-14, 3, 11], [-14, 4, 10], [-14, 6, 8], [-14, 7, 7], [-13, -1, 14], [-13, 0, 13], [-13, 1, 12], [-13, 2, 11], [-13, 3, 10], [-13, 5, 8], [-13, 6, 7], [-12, -2, 14], [-12, -1, 13], [-12, 0, 12], [-12, 1, 11], [-12, 2, 10], [-12, 4, 8], [-12, 5, 7], [-12, 6, 6], [-11, -3, 14], [-11, -2, 13], [-11, -1, 12], [-11, 0, 11], [-11, 1, 10], [-11, 3, 8], [-11, 4, 7], [-11, 5, 6], [-10, -4, 14], [-10, -3, 13], [-10, -2, 12], [-10, -1, 11], [-10, 0, 10], [-10, 2, 8], [-10, 3, 7], [-10, 4, 6], [-10, 5, 5], [-9, -5, 14], [-9, -4, 13], [-9, -3, 12], [-9, -2, 11], [-9, -1, 10], [-9, 1, 8], [-9, 2, 7], [-9, 3, 6], [-9, 4, 5], [-8, -6, 14], [-8, -5, 13], [-8, -4, 12], [-8, -3, 11], [-8, -2, 10], [-8, 0, 8], [-8, 1, 7], [-8, 2, 6], [-8, 3, 5], [-8, 4, 4], [-7, -7, 14], [-7, -6, 13], [-7, -5, 12], [-7, -4, 11], [-7, -3, 10], [-7, -1, 8], [-7, 0, 7], [-7, 1, 6], [-7, 2, 5], [-7, 3, 4], [-6, -6, 12], [-6, -5, 11], [-6, -4, 10], [-6, -2, 8], [-6, -1, 7], [-6, 0, 6], [-6, 1, 5], [-6, 2, 4], [-6, 3, 3], [-5, -5, 10], [-5, -3, 8], [-5, -2, 7], [-5, -1, 6], [-5, 0, 5], [-5, 1, 4], [-5, 2, 3], [-4, -4, 8], [-4, -3, 7], [-4, -2, 6], [-4, -1, 5], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-3, -3, 6], [-3, -2, 5], [-3, -1, 4], [-3, 0, 3], [-3, 1, 2], [-2, -2, 4], [-2, -1, 3], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]