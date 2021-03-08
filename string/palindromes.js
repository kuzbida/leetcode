const regex = new RegExp(/[A-Za-z0-9]/);


function isValidPalindrome(s) {
    if (s.length < 2) {
        return true;
    }
    let result = true;
    let left = 0;
    let right = s.length - 1;

    while (left <= right) {
        let leftCh = s[left].toLowerCase();
        let rightCh = s[right].toLowerCase();
        if (!leftCh.match(regex)) {
            while (!leftCh.match(regex) && left < right) {
                left++;
                leftCh = s[left].toLowerCase();
            }
        }
        if (!rightCh.match(regex)) {
            while (!rightCh.match(regex) && left < right) {
                right--;
                rightCh = s[right].toLowerCase();
            }
        }

        if (leftCh !== rightCh) {
            result = false;
            break;
        }
        left++;
        right--;
    }

    return result;
}

console.log(isValidPalindrome("Marge, let's \"[went].\" I await {news} telegram.") === true);
console.log(isValidPalindrome(".,") === true);
console.log(isValidPalindrome('ab_a') === true);
console.log(isValidPalindrome('abba') === true);
console.log(isValidPalindrome('abc') === false);
console.log(isValidPalindrome('a') === true);
console.log(isValidPalindrome('') === true);
console.log(isValidPalindrome('A man, a plan, a canal: Panama') === true);