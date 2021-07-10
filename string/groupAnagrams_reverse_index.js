/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};


    for (let i = 0; i < strs.length; i++) {
        const word = strs[i];

        const wordKey = new Array(26).fill(0);

        for (let c of word) {
            const pos = c.charCodeAt() - 'a'.charCodeAt();
            console.log('pos', pos)
            wordKey[pos] = wordKey[pos] + 1;
        }

        const key = wordKey.join('#');
        console.log('key', key)

        if (!map[key]) {
            map[key] = [word]
        } else {
            map[key].push(word)
        }

    }

    return Object.values(map);
};

console.log(groupAnagrams(["bdddddddddd","bbbbbbbbbbc"]));
// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// console.log(groupAnagrams(['']));
// console.log(groupAnagrams(['a']));

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