/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length%2 != 0) return false;
    
  let stack = [];

  let map = {
    '{' : '}',
    '[' : ']',
    '(' : ')'
  }
  
  for(let i =0; i<s.length; i++){

    if(map[s[i]]) stack.push(s[i]);
    else{
        let top = stack.pop();
        if(!top || s[i] != map[top])
            return false;
    }
    
    }   
   

   return stack.length == 0;
}