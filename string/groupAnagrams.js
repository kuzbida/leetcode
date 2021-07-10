/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = [];

    const used = {};


    for (let i = 0; i < strs.length; i++) {
        if (used[i]) {
            continue;
        }

        const word = strs[i];
        used[i] = true;

        result.push([word]);

        const l = word.length;
        const sortedWord = word.split('').sort().join('');

        for (let j = i + 1; j < strs.length; j++) {
            if (strs[j].length === l) {
                if (strs[j].split('').sort().join('') === sortedWord) {
                    result[result.length - 1].push(strs[j]);
                    used[j] = true
                }
            }
        }


    }

    return result;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams(['']));
console.log(groupAnagrams(['a']));

/*
* Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
* */