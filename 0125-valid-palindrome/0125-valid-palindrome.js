/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   
    s = s.toLowerCase();
    console.log(s);
    let l = 0;
    let r = s.length - 1;

    while(l < r){
         console.log(s[l] +  ' ' + s[r]);
        if(!s[l].match(/[a-z0-9]/i)) l++;
        else if(!s[r].match(/[a-z0-9]/i)) r--;

        else if (s[l] != s[r]){
           
             return false;}
             else{
        l++;
        r--;}
    }
    return true;
};