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
var isSymmetric = function(root) {
    if( root == null) return true;
    return recc(root.left, root.right)
   
};


var recc = function(left, right){
    
    if(left == null && right == null) return true;
    if(left == null || right == null) return false;
    if(left.val != right.val) return false;

    return recc(left.right, right.left) && recc(left.left, right.right);

}