class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int n = cost.length + 1;
        int[] dp = new int[n+1];
        dp[0] = 0;
        dp[1] = 0;
        int ans = 0;
        
        for(int i = 2; i<n; i++){
           dp[i] = Math.min(cost[i-1] + dp[i-1], cost[i-2] + dp[i-2]);
        }

        System.out.println(Arrays.toString(dp));

        return dp[n-1];
    }
}