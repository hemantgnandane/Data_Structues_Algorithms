/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length + 1;
    let sum  =  n * (n-1) / 2;
    let k = 0;

    for(let i =0; i<n-1; i++){
       k = k + nums[i];
    }
    console.log(sum + " " + k);
    return sum - k;
};