/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let p1 = 0;
    const map = {};
    while (p1 < s.length) {
        if (map[s[p1]] === undefined) {
            map[s[p1]] = 1;
        } else {
            map[s[p1]] += 1;
        }
        if (map[t[p1]] === undefined) {
            map[t[p1]] = -1;
        } else {
            map[t[p1]] -= 1;
        }

        p1++;
    }

    for (let k in map) {
        if (map[k] !== 0) {
            return false;
        }
    }

    return true;

};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("cat", "rat"));
console.log(isAnagram("cake", "ake"));