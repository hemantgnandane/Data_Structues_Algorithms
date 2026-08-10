/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let ans = [];
    po(root, ans);
    return ans;
};

var po = function(root, ans){
    if(!root) return;

    ans.push(root.val);
    let arr = root.children;

    for(let k of arr){
        po(k, ans);
    }
}