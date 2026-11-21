/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func rightSideView(root *TreeNode) []int {
    if root == nil {
        return nil
    }

    res := []int{}
    queue := []*TreeNode{root}

    for len(queue) > 0 {
        n := len(queue)
        last := 0
        for i := 0; i < n; i++ {
            curr := queue[0]
            queue = queue[1:]
            last = curr.Val
            if curr.Left != nil {
                queue = append(queue, curr.Left)
            }
            if curr.Right != nil {
                queue = append(queue, curr.Right)
            }
        }
        res = append(res, last)
    }

    return res
}
