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
     * @return {number[][]}
     */
    levelOrder(root) {
        let result = []
        let depth = 0
        if(!root) return result

        const helper = (root)=> {
            if(!root) return null

            if(root.left) {
                depth++
                helper(root.left)
            }
            if(root.right) {
                depth++
                helper(root.right)
            }
            if(!result[depth]) result[depth] = []
            result[depth].push(root.val)
            depth--
        }
        helper(root)
        return result
    }
}
