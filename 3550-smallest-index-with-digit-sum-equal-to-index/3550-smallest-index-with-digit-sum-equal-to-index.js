/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    for(let i = 0; i<nums.length; i++){
        let sum = digitSum(nums[i]);
        if(sum == i) return i;
    }
    return -1;
};

var digitSum = function(num) {
    let sum = 0;
    while(num>0){
        sum = sum + Math.floor(num%10);
        num = Math.floor(num / 10);
    }
    console.log(sum);
    return sum;
};