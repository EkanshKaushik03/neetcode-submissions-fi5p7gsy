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
     * @return {boolean}
     */
    isValidBST(root) {
        let validBST = true

        const helper = (root,lower,higher)=> {
            if((root.val > lower) && (root.val < higher)){
                if(root.right) helper(root.right,root.val, higher)
                if(root.left) helper(root.left,lower,root.val)
            }
            else return validBST = false
        }
        helper(root,-Infinity,Infinity) 
        return validBST  
    }
}
