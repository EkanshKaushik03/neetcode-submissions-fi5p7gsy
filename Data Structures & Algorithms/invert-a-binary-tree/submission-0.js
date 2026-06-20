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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return root;

        const queue = [root];
        let front = 0;

        while (front < queue.length) {
            const curr = queue[front++];

            [curr.left, curr.right] = [curr.right, curr.left];

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }

        return root;
    }
}
