class Solution {
    public List<Integer> getRow(int rowIndex) {
        int n = rowIndex;
        List<List<Integer>> list = new ArrayList<>();
        List<Integer> arr = new ArrayList<>();
         arr.add(1);
            list.add(arr);
        if(n==0){
             return arr;
        }
        

        else{
        for(int j = 1; j<=n; j++){
            List<Integer> ans = new ArrayList<>();
            ans.add(list.get(j-1).get(0));
            for(int i = 1; i<list.get(j-1).size(); i++){
                ans.add(list.get(j-1).get(i-1) + list.get(j-1).get(i));
            }
            ans.add(list.get(j-1).get(list.get(j-1).size() - 1));
            System.out.println(ans);
            list.add(ans);
        }
        }

    return list.get(n);
        
    }
}