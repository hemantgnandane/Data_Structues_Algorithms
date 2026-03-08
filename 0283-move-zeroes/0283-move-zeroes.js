/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {


    if(nums.length == 0 || nums.length == 1) return nums;
    let x = 0; 
    for(let i = 0; i<nums.length; i++){
        if(nums[i] != 0){
            let a = nums[x];
            nums[x] = nums[i];
            nums[i] = a;
            x++;
        }
    }

    return nums;
};