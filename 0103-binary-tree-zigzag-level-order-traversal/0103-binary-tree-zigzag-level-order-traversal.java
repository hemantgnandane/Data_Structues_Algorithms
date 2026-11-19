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
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> Blist = new ArrayList<>();
        if(root == null) return Blist;

        Queue<TreeNode> que = new ArrayDeque<>();

        que.offer(root);
        
        int cnt = 0;
        while(!que.isEmpty()){
            int len = que.size();
            List<Integer> list = new ArrayList<>();
            for(int i = 0; i<len; i++){
                TreeNode ptr = que.poll();
                list.add(ptr.val);
            if(ptr.left != null) que.offer(ptr.left);
            if(ptr.right != null) que.offer(ptr.right);
            }
            if(cnt%2!=0) Collections.reverse(list);
            Blist.add(list);
            cnt++;
        }

        return Blist;
    }
}