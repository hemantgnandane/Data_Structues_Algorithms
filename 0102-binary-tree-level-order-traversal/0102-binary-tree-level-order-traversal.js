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
    return traverse(root);
};


var traverse = function(p){
    if(p === null) return [];

    let list = [];

    let q = [];
    q.push(p);

    while(q.length >  0){
        let n = q.length;
        let arr = [];

        for(let i = 0; i<n; i++){
            let ptr = q.shift();
            arr.push(ptr.val);
            if(ptr.left) q.push(ptr.left);
            if(ptr.right) q.push(ptr.right);
        }

        list.push(arr);
    }
    return list;
}