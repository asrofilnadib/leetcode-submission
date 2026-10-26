/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var mergeK = function(start, end) {
        if (start > end) return null;
        if (start == end) return lists[start];

        var mid = Math.floor((start + end) / 2)

        var left = mergeK(start, mid)
        var right = mergeK(mid + 1, end)

        return mergeDua(left, right)
    }

    var mergeDua = function (left, right) {
        var dummy = new ListNode(0);
        var tail = dummy;

        while (left !== null && right !== null) {
            if (left.val <= right.val) {
                tail.next = left
                left = left.next
            } else {
                tail.next = right
                right = right.next
            }

            tail = tail.next
        }

        if(left !== null) tail.next = left
        else tail.next = right

        return dummy.next
    }

    return mergeK(0, lists.length - 1)
};
