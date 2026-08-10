/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
     let ans = [];
    po(root, ans);
    return ans;
};

var po = function(root, ans){
    if(!root) return;

   
    let arr = root.children;

    for(let k of arr){
        po(k, ans);
    }

    ans.push(root.val);
};