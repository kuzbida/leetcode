function fSlidingWindow(s) {
    if (s.length < 2) {
        return s.length;
    }

    let result = 0;
    let p1 = 0;

    while (p1 < s.length && (s.length - p1) > result) {
        let p2 = p1;
        const letterMap = {};
        while (p2 < s.length) {
            if (letterMap[s[p2]] === undefined) {
                const length = p2 - p1 + 1;
                result = Math.max(result, length);

                letterMap[s[p2]] = p2;
                p2++;
            } else {
                p1 = letterMap[s[p2]];
                break;
            }
        }
        p1++;
    }

    return result;
}

console.log(fSlidingWindow('abcbdaac'));
console.log(fSlidingWindow('abccawee'));
console.log(fSlidingWindow('abcebcdaeet'));
console.log(fSlidingWindow(''));