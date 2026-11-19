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
    public boolean isSubtree(TreeNode root, TreeNode subRoot) {
        List<TreeNode> list = new ArrayList<>();

        traverse(root, subRoot, list);
        System.out.println(list);

        for(TreeNode ptr: list){
            if(isSameTree(ptr, subRoot)) return true;
        }
        return false;
        
    }

    public void traverse(TreeNode root, TreeNode target, List<TreeNode> list){
        if(root==null) return;
        if(root.val ==  target.val) list.add(root);
        traverse(root.left, target, list);
        traverse(root.right, target, list);        
    }


    public boolean isSameTree(TreeNode a, TreeNode b){
        if(a==null && b==null) return true;
        if(a!=null && b!= null){
            return a.val == b.val && isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
        }
        else return false;
    }
}