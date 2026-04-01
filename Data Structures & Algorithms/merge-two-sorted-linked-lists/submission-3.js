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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode(0)
        let head = dummy;
        while(list1 || list2) {
            if(list1 && list2) {
                let x = list1.val < list2.val ? list1.val : list2.val
                if(list1.val < list2.val) {
                    list1 = list1.next
                }else {
                    list2 = list2.next
                }
                dummy.next = new ListNode(x)
            }else {
                if(list1 && !list2) {
                    dummy.next = new ListNode(list1.val)
                    list1 = list1.next
                } else {
                    dummy.next = new ListNode(list2.val)
                    list2 = list2.next
                } 
            }
            dummy = dummy.next
        }
        return head.next
    }
}
