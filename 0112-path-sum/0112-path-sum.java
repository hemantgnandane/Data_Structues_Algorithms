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
    boolean ans = false;
    public boolean hasPathSum(TreeNode root, int targetSum) {
        helper(root, 0, targetSum);

        return ans;
    }

    public void helper(TreeNode root, int sum, int ts){
        System.out.println(sum);
        if(root == null) return;
        helper(root.left, sum + root.val, ts);
        if(root.left == null && root.right ==  null && sum + root.val == ts) ans = true;
        helper(root.right, sum + root.val, ts);
        if(root.left == null && root.right ==  null && sum + root.val == ts) ans = true;

        return ;
    }
}