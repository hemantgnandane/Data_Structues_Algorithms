/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   
    s = s.toLowerCase();
    let check = "";

    for(let i = 0; i<s.length; i++){
        if(s[i].match(/[a-z0-9]/i)) check = check + s[i];
    }
    console.log(check);
    let k = check.split("").reverse().join("");;
    console.log(k);
    return check == k;
};