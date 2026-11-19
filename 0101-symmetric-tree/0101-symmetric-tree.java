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
    public boolean isSymmetric(TreeNode root) {
        if(root==null) return true;
        else return recc(root.left, root.right);
    }

    public boolean recc(TreeNode lt, TreeNode rt){
        
        if(lt == null && rt == null) return true;
        if(lt == null || rt == null) return false;
        if(lt.val != rt.val) return false;
        return recc(lt.left, rt.right) && recc(lt.right, rt.left);
    }
}