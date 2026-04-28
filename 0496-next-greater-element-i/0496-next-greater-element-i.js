/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(a, b) {
    let stack = [];
    let ans = {};
    let n = b.length;
    ans[b[n-1]] = -1;
    stack.push(b[b.length -1]);
    for(let i = n -2 ;i>= 0; i--){
        console.log(stack);
        let top = stack[stack.length -1]
        if(b[i] < top){
            ans[b[i]] = top
            // stack.push(b[i]);
        }
        else{
           while (stack.length > 0 && stack[stack.length - 1] <= b[i]) {
                stack.pop();
            }

            if(stack.length == 0){
                ans[b[i]] = -1;
                // stack.push(b[i]);
            }

            else{
                ans[b[i]] = stack[stack.length - 1];
                
            }
        }

        stack.push(b[i]);
    }

    console.log(ans);

    let fans =[];

    for(let i = 0 ; i<a.length ; i++){
        fans.push(ans[a[i]]);
    }

    return fans;
};