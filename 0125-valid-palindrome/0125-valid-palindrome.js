/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   
    s = s.toLowerCase();
    let check = "";
    let k = "";

    for(let i = 0; i<s.length; i++){
        if(s[i].match(/[a-z0-9]/i)){
             check = check + s[i];
             k = s[i] + k;
             }
    }
    
    return check == k;
};