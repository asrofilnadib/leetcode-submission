/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function(head) {
    if (!head) return null;

    let curr = head
    while (curr) {
        if (curr.child) {
            const next = curr.next;
            const child = curr.child;

            flatten(child);

            let tail = child;
            while (tail.next) tail = tail.next;

            curr.next = child;
            child.prev = curr;

            tail.next = next
            if (next) next.prev = tail

            curr.child = null
        }
        curr = curr.next
    }

    return head;
};
