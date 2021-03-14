/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    if (s.length === 0) return s;

    const arr = s.split('');
    const leftParenthesesStack = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            leftParenthesesStack.push(i);
        }

        if (arr[i] === ')') {
            if (leftParenthesesStack.length > 0) {
                leftParenthesesStack.pop();
            } else {
                arr[i] = undefined;
            }
        }
    }

    if (leftParenthesesStack.length > 0) {
        for (let j = 0; j < leftParenthesesStack.length; j++) {
            arr[leftParenthesesStack[j]] = undefined;
        }
    }

    return arr.join('');

};

console.log(minRemoveToMakeValid('lee(t(c)o)de)') === 'lee(t(c)o)de');
console.log(minRemoveToMakeValid('a)b(c)d') === 'ab(c)d');
console.log(minRemoveToMakeValid('))((') === '');
console.log(minRemoveToMakeValid('(a(b(c)d)') === 'a(b(c)d)');