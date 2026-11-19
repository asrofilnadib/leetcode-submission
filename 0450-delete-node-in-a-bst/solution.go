/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func deleteNode(root *TreeNode, key int) *TreeNode {
    var minValueNode func(*TreeNode) *TreeNode
    minValueNode = func(root *TreeNode) *TreeNode {
        curr := root
        for curr.Left != nil {
            curr = curr.Left
        }
        return curr
    }

    var remove func(*TreeNode, int) *TreeNode
    remove = func(root *TreeNode, key int) *TreeNode {
        if root == nil {
            return nil
        }

        if key < root.Val {
            root.Left = remove(root.Left, key)
        } else if key > root.Val {
            root.Right = remove(root.Right, key)
        } else {
            if root.Left == nil {
                return root.Right
            }
            if root.Right == nil {
                return root.Left
            }
            minNode := minValueNode(root.Right)
            root.Val = minNode.Val
            root.Right = remove(root.Right, minNode.Val)
        }
        return root
    }

    return remove(root, key)
}
