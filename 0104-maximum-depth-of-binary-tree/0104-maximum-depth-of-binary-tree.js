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
var maxDepth = function(root) {
let ma = 1;
let depth = 1;

return reccur(root, depth, ma);    
};

let reccur = function(root, depth, ma){
    if(root == null) return 0;
    
    ma = Math.max(depth, ma);
    console.log(ma);

let c  = reccur(root.left, depth + 1, ma);
let d = reccur(root.right, depth + 1, ma);


return Math.max(ma, c, d);
}