class Solution {
    public int lengthOfLongestSubstring(String s) {
       int l = 0, r = 0, max = 0;

       int[] arr = new int[256];
       Arrays.fill(arr, -1);

        int n = s.length();

        while(r<n){
            if(arr[s.charAt(r)]!=-1){
                if(arr[s.charAt(r)]>=l)
                    l = arr[s.charAt(r)] +1;
            }

            max = Math.max(max, r-l + 1);
            arr[s.charAt(r)] = r;
            r++;
        }

        return max;



    }
}