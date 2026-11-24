class Solution {
    public int findTargetSumWays(int[] nums, int target) {
        int sum = 0;

        for(int i = 0; i<nums.length; i++){
            sum = sum + nums[i];
        }

        if(Math.abs(target) > sum) return 0;

        if((sum + target) % 2 != 0) return 0;

        sum = (sum + target)/2;

        

        int n = nums.length + 1;
        int m = sum + 1;

        sum = target;

        int[][] dp = new int[n][m];

        for(int i = 0; i<n; i++){
            for(int j = 0; j<m; j++){
                if(i == 0) dp[i][j] = 0;
                if(j==0) dp[i][j] = 1;
            }
        }

        for(int i = 1; i<n; i++){
            for(int j = 0; j<m; j++){
                if(nums[i-1] <= j)
                    dp[i][j] = dp[i-1][j - nums[i-1]] + dp[i-1][j];
                else
                    dp[i][j] = dp[i-1][j];
            }
        }


        return dp[n-1][m-1];
    }
}