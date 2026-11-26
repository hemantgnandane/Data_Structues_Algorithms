class Solution {
    public int minimumTotal(List<List<Integer>> triangle) {
        // System.out.println(triangle)
    
        for(int k = triangle.size() - 2; k>= 0; k--){
            for(int i = 0; i< triangle.get(k).size(); i++){
                triangle.get(k).set(i, triangle.get(k).get(i) + Math.min(triangle.get(k+1).get(i), triangle.get(k+1).get(i+1)));
            }
        }

        return triangle.get(0).get(0);
    }
}