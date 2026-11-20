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
    public List<Integer> rightSideView(TreeNode root) {

        
        List<Integer> list = new ArrayList<>();
        if(root == null) return list;

        Queue<TreeNode> qu = new ArrayDeque<>();

        qu.offer(root);

        while(!qu.isEmpty()){
            System.out.println(qu);
            int n = qu.size();
            for(int i = 0; i< n; i++){
                TreeNode ptr = qu.poll();
                if(i == 0)
                list.add(ptr.val);

                if(ptr.right != null) qu.offer(ptr.right);
                if(ptr.left != null) qu.offer(ptr.left);
            }
        }
    return list;
    }
}