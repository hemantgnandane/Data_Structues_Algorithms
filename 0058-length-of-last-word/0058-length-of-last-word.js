/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let n = s.length;

    let count = 0;
    if(s[0] != " ") count++;

    for(let i = 1; i<s.length; i++){
        if(s[i] != " " && s[i-1]==" "){
            count = 1;
        }
        else if(s[i] != " ") count++
        else continue;
    }
    return count;
};