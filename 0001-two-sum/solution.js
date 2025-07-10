/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (const [i, c] of nums.entries()) {
        const pair = target - c
        if (map.has(pair)) return [i, map.get(pair)]
        map.set(c, i)
    }
};
