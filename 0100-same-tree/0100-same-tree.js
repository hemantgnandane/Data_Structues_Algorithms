/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    console.log(traverse(p));
    console.log(traverse(q));
    return JSON.stringify(traverse(p)) === JSON.stringify(traverse(q));
};

var traverse = function(p){
    let list = [];

    let q = [];
    q.push(p);

    while(q.length > 0){
       let ptr = q.shift();
       if (ptr === null) list.push(null)
       else{
       list.push(ptr.val);
       if(ptr.left) q.push(ptr.left);
       else q.push(null)

       if(ptr.right) q.push(ptr.right);
       else q.push(null)
       }
    }

    return list;
}