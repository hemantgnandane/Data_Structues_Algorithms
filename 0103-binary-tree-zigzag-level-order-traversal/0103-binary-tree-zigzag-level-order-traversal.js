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
var zigzagLevelOrder = function(root) {
    return traverse(root)
};


var traverse = function(p){
    if(p === null) return [];
    let cnt = 0;

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
        cnt++;
        if(cnt%2===1)
        list.push(arr);
        else list.push(arr.reverse());
    }
    return list;
}