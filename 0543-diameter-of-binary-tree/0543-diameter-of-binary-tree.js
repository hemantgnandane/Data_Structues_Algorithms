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
var diameterOfBinaryTree = function(root) {
    let dia = 0;
    
   var recc = function(root){
    if(root == null) return 0;
    let left = recc(root.left);
    let right = recc(root.right);
    dia = Math.max(dia, left + right); 

    return 1 + Math.max(left, right);
}
recc(root);
return dia;
    
};

