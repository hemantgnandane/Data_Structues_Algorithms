/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let stack = [];
    stack.push(s[0]);
    for(let i = 1;  i<s.length; i++){
        
        let c = s[i];

        let top = stack[stack.length-1];
        top = top + c;
        // console.log(stack + " " + top);
        if(top == 'ab') stack[stack.length-1]= top;
        else if(top == 'abc') stack.pop();
        else stack.push(c);

    }

    return stack.length==0;
    
};