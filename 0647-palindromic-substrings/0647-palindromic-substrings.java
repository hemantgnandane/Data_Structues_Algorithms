class Solution {
    public int countSubstrings(String s) {
        int count = 0;
        for(int i = 0; i<s.length();i++){
            for(int j = i+1; j<=s.length(); j++){
                String a = s.substring(i, j);
                String b = new StringBuilder(a).reverse().toString();
                
                if(a.equals(b)){ 
                    count++;
                    // System.out.println(a  + " " + b);
                    }
            }
        }

        return count;
    }
}