/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        if(!root) return 0
        let goodNodes = 0
        
        const helper = (root,maxValue) => {
            if(root.val >= maxValue) goodNodes++
            if(root.right) helper(root.right, Math.max(root.val, maxValue))
            if(root.left) helper(root.left, Math.max(root.val, maxValue))
        }
        helper(root, -101)
        return goodNodes
    }
}
