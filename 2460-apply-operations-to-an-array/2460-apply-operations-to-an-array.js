/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    
    for(let i =1; i<nums.length; i++){
        if(nums[i-1]  == nums[i]){
            nums[i-1] = 2 * nums[i-1];
            nums[i] = 0;
        }
    }
    
    let x = 0;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] != 0){
            let ab = nums[i];
            nums[i] = nums[x];
            nums[x] = ab;
            x++;
        }   
    }

return nums;

};