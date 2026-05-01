/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {
    
    let n = temp.length;
    let stack = [];
    let pu = [temp[n-1], n-1];
    stack.push(pu);
    let ans = [];
    ans[n-1] = 0;

    for(let i = n-2; i>=0; i--){
        
        // console.log(stack);
        let count = 0; 
        if(stack[stack.length - 1][0] > temp[i]){
            count++;
        }
        else{
            
               while(stack.length > 0 && stack[stack.length-1][0] <= temp[i]){
                stack.pop();
               
               }
               if(stack.length == 0) {
                // console.log(ans);
                count = 0;
            }
            else{
                count = stack[stack.length - 1][1] - i;
            }
        }

        stack.push([temp[i], i]);
        ans[i] = count;

    }

return ans;
};