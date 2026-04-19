/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    
    let map = {
        '*' : '*',
        '+' : '+',
        '-' : '-',
        '/' : '/',
    }
    let stack = [];

    for(let i = 0; i<tokens.length; i++){
       
        if(!map[tokens[i]]) {
            let num = tokens[i] - '0';
            stack.push(num);
        }
        else{
            let num1 = stack.pop();
            let num2 = stack.pop();
            let ans = 0;

            if(tokens[i] == "*" ) ans = num2*num1;
            else if(tokens[i] == '/') ans = Math.trunc(num2/num1);
            else if(tokens[i] == '-') ans = num2 - num1;
            else ans = num2 + num1;
           stack.push(ans);
        }

         console.log(stack);
    }
    return stack.pop();
};