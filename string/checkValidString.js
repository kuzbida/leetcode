/*
Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

The following rules define a valid string:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    const leftParenthesisStack = [];
    const asteriskStack = [];
    const arr = s.split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            leftParenthesisStack.push(i);
        }
        if (arr[i] === '*') {
            asteriskStack.push(i);
        }

        if (arr[i] === ')') {
            if (leftParenthesisStack.length > 0) {
                leftParenthesisStack.pop();
            } else if (asteriskStack.length > 0) {
                asteriskStack.pop();
            } else {
                return false;
            }
        }
    }

    const leftParenthesisL = leftParenthesisStack.length;
    const asteriskL = asteriskStack.length;

    if (leftParenthesisL > 0 && asteriskL > 0 && asteriskL >= leftParenthesisL) {
        while (leftParenthesisStack.length > 0) {
            const parenthesis = leftParenthesisStack.pop();
            const asterisk = asteriskStack.pop();
            if (parenthesis > asterisk) {
                return false;
            }
        }
    }


    return leftParenthesisStack.length === 0;
};

console.log(checkValidString('()'));
console.log(checkValidString(
    '(*)'
));
console.log(checkValidString('(*))'));
console.log(checkValidString('((*)'));
console.log(checkValidString('((*') === false);
console.log(checkValidString('(((*)') === false);
console.log(checkValidString("(((()))())))*))())()(**(((())(()(*()((((())))*())(())*(*(()(*)))()*())**((()(()))())(*(*))*))())") === false);