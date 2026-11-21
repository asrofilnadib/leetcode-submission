/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return []

    let res = []
    let queue = [root]

    while (queue.length > 0) {
        const n = queue.length
        let last = 0
        for (let i = 0; i < n; i++) {
            let curr = queue.shift()
            last = curr.val
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
        res.push(last)
    }

    return res
};
