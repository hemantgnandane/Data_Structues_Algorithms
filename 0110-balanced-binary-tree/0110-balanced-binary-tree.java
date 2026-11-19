/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean isBalanced(TreeNode root) {
         if(root == null) return true;
         if(Math.abs(hT(root.left)-hT(root.right)) > 1) return false;
         else{
           return isBalanced(root.right) && isBalanced(root.left);
         }
    }

    public int hT(TreeNode root){
        if(root == null) return 0;
        int left = hT(root.left);
        int right = hT(root.right);
        return 1 + Math.max(left, right);
    }
}