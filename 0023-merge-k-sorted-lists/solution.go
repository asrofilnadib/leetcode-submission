/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeKLists(lists []*ListNode) *ListNode {
    var mergeK func(start, end int) *ListNode
    var mergeDua func(start, end *ListNode) *ListNode

    mergeK = func(start, end int) *ListNode {
        if start > end {
            return nil
        }
        if start == end {
            return lists[start]
        }

        mid := (start + end) / 2

        left := mergeK(start, mid)
        right := mergeK(mid + 1, end)

        return mergeDua(left, right)
    }

    mergeDua = func(left, right *ListNode) *ListNode {
        dummy := &ListNode{}
        tail := dummy

        for left != nil && right != nil {
            if (left.Val <= right.Val) {
                tail.Next = left
                left = left.Next
            } else {
                tail.Next = right
                right = right.Next
            }

            tail = tail.Next
        }

        if left != nil {
            tail.Next = left
        } else {
            tail.Next = right
        }

        return dummy.Next
    }

    return mergeK(0, len(lists) - 1)
}
