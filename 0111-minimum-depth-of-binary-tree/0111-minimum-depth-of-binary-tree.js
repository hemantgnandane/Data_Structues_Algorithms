/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0;
    let left = minDepth(root.right);
        if(left == 0) left = Infinity;
    let right = minDepth(root.left);
        if(right == 0) right = Infinity;

        if(left == Infinity && right == Infinity) left = 0
    return 1 + Math.min(left, right);
};