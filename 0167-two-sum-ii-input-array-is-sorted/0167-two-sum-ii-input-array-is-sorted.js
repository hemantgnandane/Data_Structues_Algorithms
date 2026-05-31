/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let sum = nums[l] + nums[r];
    let ans = [0, 0]

    while(true){
        sum = nums[l] + nums[r];

        if(sum == target){
            ans[0] = l + 1;
            ans[1] = r + 1;
            return ans;
        }
        else if(sum > target) r--;
        else l++;
    }
};