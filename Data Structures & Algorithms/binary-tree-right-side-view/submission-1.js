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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return []
        let maxDepth = 0
        let result = [root.val]

         const helper = (root,depth) => {
                if(depth > maxDepth) {
                    maxDepth = depth
                    result.push(root.val)
                }
                if(root.right) helper(root.right, depth + 1)
                if(root.left) helper(root.left, depth + 1)
         }

         helper(root, 0)

         return result
    }
}
