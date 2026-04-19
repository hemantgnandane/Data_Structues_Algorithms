/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {

    let ans = "";

    let stack = [];
    let count = 0;

    for(let i = 0; i<s.length; i++){
        console.log(stack)
        
      if(stack.length == 0) stack.push(s[i]);
      else if(stack.length == 1 && s[i] == ')' && count == 0){
       stack.pop();
      }
    //   else
      else{
        if(s[i] == '(') count++;
        else count--;

         ans = ans + s[i];
      }

        // console.log(ans  +  " " + i);
    }

    return ans;
    
};