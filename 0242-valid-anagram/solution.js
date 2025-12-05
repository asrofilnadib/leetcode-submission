/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let firstObj = {};
    let secObj = {};

    for (let val of s) {
        firstObj[val] = (firstObj[val] || 0) + 1;
    }

    for (let val of t) {
        secObj[val] = (secObj[val] || 0) + 1;
    }

    for (let key in firstObj) {
        if (firstObj[key] !== secObj[key]) {
            return false;
        }
    }

    return true;
};
