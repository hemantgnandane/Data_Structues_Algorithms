/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let n = nums.length; 
    let map = new Map();


    for(let i = 0; i<n; i++){
        if(map.has(nums[i]));
        else map.set(nums[i], i);
    }

    console.log(map);


    for(let i = 0; i<n;i++){
        let ans = [i, 0]
        let num = target - nums[i];
        if(map.has(num) ){
            if(map.get(num) != i){
            ans[1] = map.get(num);
            return ans;
            }
        }
    }
    
};