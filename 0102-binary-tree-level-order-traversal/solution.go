/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func levelOrder(root *TreeNode) [][]int {
    if root == nil {
        return nil
    }

    res := [][]int{}
    queue := []*TreeNode{root}

    for len(queue) > 0 {
        n := len(queue)
        level := make([]int, 0, n)
        for i := 0; i < n; i++ {
            curr := queue[0]
            queue = queue[1:]
            level = append(level, curr.Val)
            if curr.Left != nil {
                queue = append(queue, curr.Left)
            }
            if curr.Right != nil {
                queue = append(queue, curr.Right)
            }
        }
        
        res = append(res, level)
    }

    return res
}
