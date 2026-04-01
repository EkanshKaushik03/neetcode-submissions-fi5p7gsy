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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let n1 = l1
        let n2 = l2
        let carry = 0;
        let dummy = new ListNode(0);
        let tail = dummy;

        while(n1 !== null || n2 !== null) {
            let x1 = n1 ? n1.val : 0
            let x2 = n2 ? n2.val : 0
            let sum = x1 + x2 + carry;

            if(sum >= 10) {
                sum = sum % 10;
                carry = 1;
            } else {
                carry = 0;
            }
            tail.next = new ListNode(sum);
            tail = tail.next;

            n1 = n1 ? n1.next : null;
            n2 = n2 ? n2.next : null;
 
        }
        if (carry > 0) {
            tail.next = new ListNode(carry);
        }
        return dummy.next

    }
}
