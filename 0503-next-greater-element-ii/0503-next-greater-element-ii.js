/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let n = nums.length;
    let ans = [];
    
    let stack = [];
    stack.push(nums[n-1]);
    ans[n -1] = -1;
    for(let i = (2*n) - 1; i>= 0; i--){
        if(nums[i%n] < stack[stack.length -1]){
            ans[i%n] = stack[stack.length -1];
        }

        else{
            while(stack.length){
                if(stack[stack.length-1] <= nums[i%n]) stack.pop();
                else break;
            }
            if(stack.length != 0) ans[i%n] = stack[stack.length -1];
            else ans[i%n] = -1; 
        }

        stack.push(nums[i%n]);
    }

    

    return ans;
};