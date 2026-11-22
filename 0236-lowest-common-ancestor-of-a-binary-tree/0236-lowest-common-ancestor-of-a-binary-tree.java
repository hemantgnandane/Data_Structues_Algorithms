/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    TreeNode ans = null;
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        
        int a = recc(root, p, q);

        return ans;
    }


    public int recc(TreeNode root, TreeNode p, TreeNode q){

        if(root == null) return 0;
        
        int left = recc(root.left, p, q);
        int right = recc(root.right, p, q);
        int mid = 0;
        if(root == p || root == q) mid = 1;
        
        int cnt = left + right + mid;
        if(cnt == 2 && ans == null){
            System.out.println("i am here +" + root.val);
             ans = root;
}

        
        return cnt;
    }
}