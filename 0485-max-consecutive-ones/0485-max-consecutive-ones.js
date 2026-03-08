/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let x = 0;
    let y = 0;
    
    for(let i = 0;i <nums.length; i++){
        if(nums[i] != 1){
            x = Math.max(x, y);
            y = 0;
            console.log(x +  ' ' + y);
        }
        else{
            y++;
        }
    }
     x = Math.max(x, y);
    console.log(x +  ' ' + y);

    return x;
};