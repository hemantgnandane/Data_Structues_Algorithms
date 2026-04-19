/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length%2 != 0) return false;
    
  let stack = [];
  
  for(let i =0; i<s.length; i++){

    console.log(stack);
    let c  = s[i];
    console.log(c)
    if(c == '(' || c == '{' || c == '['){
        stack.push(c);
    }
    else{
        
        if(c == ')'){ 
            if(stack.pop() == '(') continue; 
            else return false; 
            }
        else if(c == '}'){ 
            if(stack.pop() == '{') continue; 
            else return false; 
            }
        else if(c == ']') { 
            if(stack.pop() == '[') continue; 
            else return false; 
            }
    }   
  }  

   return stack.length == 0;
};