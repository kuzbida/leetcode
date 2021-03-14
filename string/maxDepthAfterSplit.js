/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function (seq) {
    const n = seq.length;
    const answers = new Array(n);
    answers.fill(-1);
    let flag = 0;
    for (let i = 0; i < n; i++) {
        if (seq[i] === '(') {
            flag = Math.abs(1 - flag);
            answers[i] = flag;
        } else {
            answers[i] = flag;
            flag = Math.abs(1 - flag);
        }
    }
    return answers;
};
/*
var maxDepthAfterSplit = function (seq) {
    const stack = [];
    const result = [];
    let i = 0;
    // let isBSequence = false;

    while (i < seq.length) {
        if (seq[i] === '(') {
            result.push(stack.length);
            stack.push('(');
            i++;
        } else if (seq[i] === ')') {
            if (stack.length > 0) {
                stack.pop();
                result.push(stack.length);
                i++;
                // if (stack.length === 0) {
                //     isBSequence = true;
                // }
            } else {
                // sequence isn't valid paranteses string
                return null;
            }
        } else {
            // sequence includes not valid character
            return null;
        }
    }

    return result;
};*/

/*
Example 1:

Input: seq = '(()())'
Output: [0,1,1,1,1,0]
Example 2:

Input: seq = '()(())()'
Output: [0,0,0,1,1,0,1,1]*/


console.log('(()())', maxDepthAfterSplit('(()())'));
console.log('(()())', [0, 1, 1, 1, 1, 0]);
console.log('======');
console.log('()(())()', maxDepthAfterSplit('()(())()'));
console.log('()(())()', [0, 0, 0, 1, 1, 0, 1, 1]);