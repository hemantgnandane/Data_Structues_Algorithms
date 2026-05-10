/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n = nums.length;

    let r = n-1;
    
    let l = 0;

    while(l<=r){
        console.log(nums.slice(l, r + 1));
        let mid = l +  Math.floor((r-l)/2);
        console.log(nums[mid]);

        if(nums[mid] == target) return mid;
       else if(nums[l] <= nums[mid]){
        if(target < nums[mid] && target >= nums[l]) r = mid - 1 ;
        else l = mid + 1;
       }
       else{
        if(target > nums[mid] && target <= nums[r]) l = mid + 1;
        else r = mid - 1;
       }
    }

    return -1;
};