/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let arr = [];
    let k = 0;
    nums = nums.sort((a, b) => a - b);
    console.log(nums);
    for(let i =0; i<nums.length;i++){
        if(nums[i] == target) {
            arr[k] = i;
            k++;
            }
    }
    return arr;
};