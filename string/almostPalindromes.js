const regex = new RegExp(/[A-Za-z0-9]/);

function f1(s, left, right, removedLetters) {
    let result = true;

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
            if (!removedLetters) {
                return f1(s, left + 1, right, true) || f1(s, left, right - 1, true);

            } else {
                result = false;
                break;
            }
        }
        left++;
        right--;
    }

    return result;
}

function f(s) {
    if (s.length < 2) {
        return true;
    }

    return f1(s, 0, s.length - 1, false);

}

console.log(f('abca') === true);
console.log(f('abbae') === true);
console.log(f('abcwfa') === false);
console.log(f('a') === true);
console.log(f('') === true);
console.log(f('A man, a plan, a canal: Panama') === true);