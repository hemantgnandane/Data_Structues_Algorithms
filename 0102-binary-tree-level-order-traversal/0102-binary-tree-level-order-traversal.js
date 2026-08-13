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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let ans = [];
    let q = [root];

    while(q.length){
        let size = q.length;
        let level = [];
        for(let i = 0; i<size; i++){
            let ptr = q.shift();
            level.push(ptr.val);

            ptr.left && q.push(ptr.left);
            ptr.right && q.push(ptr.right);
            
        }

        ans.push(level);
    }

    return ans;
    
};