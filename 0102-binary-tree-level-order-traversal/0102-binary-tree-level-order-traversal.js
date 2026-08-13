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
    let q = [];
    q.push([root]);
    console.log(q)
    while(q.length){
      let ptr2 = q.shift();
      console.log(ptr2);

      let temp = [];
      let level = [];
      for(let ptr of ptr2){
      
      level.push(ptr.val);
      if(ptr.left){
        temp.push(ptr.left);
      }
      if(ptr.right){
        temp.push(ptr.right);
      }
      }
      ans.push(level);
      if(temp.length > 0) q.push(temp);
      temp = [];

    }

    return ans;
    
};