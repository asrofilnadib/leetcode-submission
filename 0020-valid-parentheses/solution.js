/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    let stk = [];

    const pairs = {
        ')' : '(',
        '}' : '{',
        ']' : '[',
    }

    for (const ch of s) {
        if (pairs[ch]) {
            if (!stk.length || stk.pop() !== pairs[ch]) return false
        } else {
            stk.push(ch)
        }
    }

    return !stk.length;
};
