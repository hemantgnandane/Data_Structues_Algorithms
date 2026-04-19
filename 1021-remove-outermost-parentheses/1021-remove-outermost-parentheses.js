/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {

    let ans = "";

    let stack = 0;
    let count = 0;

    for(let i = 0; i<s.length; i++){
        console.log(stack)
        
      if(stack == 0) stack++;
      else if(stack == 1 && s[i] == ')' && count == 0){
       stack--;
      }
      else{
        if(s[i] == '(') count++;
        else count--;

         ans = ans + s[i];
      }
    }

    return ans;
    
};