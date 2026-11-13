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
 * @return {boolean}
 */
var isBalanced = function(root) {
     if(root == null) return true;
    let left = recc(root.left);
    let right = recc(root.right);
    console.log(left + " " + right)
    if(Math.abs(left - right) > 1) return false;

    let l = isBalanced(root.left);
    let r = isBalanced(root.right);

    if(!l || !r) return false;
    return true;
    
};


var recc = function(root){
    if(root == null) return 0;
    let left = recc(root.left);
    let right = recc(root.right);
    
    return 1 + Math.max(left, right);
}