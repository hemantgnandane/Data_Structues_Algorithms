/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    
    let ans = 0;
    let min = Number.MAX_VALUE;

    for(let i = 0; i<nums.length ; i++){
        if(nums[i] == target){
            console.log(i +  ' ' + ans);
            if(min > Math.abs(i - start)){
                min = Math.abs(i - start);
                ans = i;
            }
        }
    }

    return min;
};