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
    
    public List<String> binaryTreePaths(TreeNode root) {

        List<String> list = new ArrayList<>();
        recc(root, "", list);
        System.out.println(list);
        return list;
    }


    public void recc(TreeNode root, String str, List<String> list){
        str = str + root.val;
        if(root.left != null) {
           recc(root.left, str + "->", list);
        }
        if(root.right != null){
           recc(root.right, str + "->", list);
        }
        else
            if(root.left == null && root.right == null)
            list.add(str);

    }

   
}