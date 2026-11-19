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
    int lsum = 0;
    public int sumNumbers(TreeNode root) {
        int sum = 0;
        recc(root, 0);
        return lsum;
    }
    public void recc(TreeNode root, int sum){
        System.out.println(sum + " " + lsum);
        if(root == null) return;
        sum = sum * 10 + root.val;
        recc(root.left, sum);
        recc(root.right, sum);
        if(root.left == null && root.right == null) lsum += sum;
    }
}