/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let n = nums.length;
    let ans = [];
    
    let stack = [];
    stack.push(nums[n-1]);
    let n_nums = [...nums, ...nums];
    console.log(n_nums);
    ans[n_nums.length -1] = -1;
    for(let i = n_nums.length - 1; i>= 0; i--){
        if(n_nums[i] < stack[stack.length -1]){
            ans[i] = stack[stack.length -1];
        }

        else{
            while(stack.length){
                if(stack[stack.length-1] <= n_nums[i]) stack.pop();
                else break;
            }
            if(stack.length != 0) ans[i] = stack[stack.length -1];
            else ans[i] = -1; 
        }

        stack.push(n_nums[i]);
    }

    

    return ans.slice(0, n);
};