/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let x = 0;
    for(let i = 0; i<nums.length; i++){
        if((nums[x] == val && x==i) || (nums[x] == val && nums[i] == val)){
            continue;
        }
        else if(nums[x] == val && nums[i] != val){
            nums[x] = nums[i];
            nums[i] = val;
            i = x+1;
            x++;
            
        }
        else{
        
            x++;
            }
    }
    return x;
};