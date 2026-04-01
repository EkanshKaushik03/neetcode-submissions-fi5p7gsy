/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let fast = head;
        let slow = head;

        for (let i = 0; i < n + 1; i++) {
            if(fast === null && i === n) {
                let temp = head.next
                head.next = null
                head = temp
                return head;
            }
            if (fast === null) {
                return null;
            }
            fast = fast.next;
        }
        while(fast !== null) {
            slow = slow.next
            fast = fast.next
        }
        let temp = slow.next
        slow.next = temp.next
        temp.next = null
        return head;
    }
}
