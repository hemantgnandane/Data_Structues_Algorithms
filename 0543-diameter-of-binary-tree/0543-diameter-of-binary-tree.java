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
    int dia = 0;
    public int diameterOfBinaryTree(TreeNode root) {
        if(root == null) return 0;
        ht(root);
        return  dia;

    }

    public int ht(TreeNode root){
        if(root == null) return 0;
        int left = ht(root.left);
        int right = ht(root.right);
        dia = Math.max(dia, left+right);
        return 1 + Math.max(left, right);
    }
}