/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var target = nums.length - k

    var quickSelect = function(s, e) {
        if (e - s + 1 <= 1) {
            return nums[s]
        }

        var r = s + Math.floor(Math.random() * (e - s + 1))
        
        var tmp = nums[r]
        nums[r] = nums[e]
        nums[e] = tmp

        var pivot = nums[e]
        var left = s

        for (let i = s; i < e; i++) {
            if (nums[i] < pivot) {
                var temp = nums[left]
                nums[left] = nums[i]
                nums[i] = temp
                left++;
            }
        }

        nums[e] = nums[left]
        nums[left] = pivot

        if (left === target) {
            return nums[left]
        }
        
        if (target < left) {
            return quickSelect(s, left-1)
        } else {
            return quickSelect(left + 1, e)
        }
    }

    return quickSelect(0, nums.length-1)
};
