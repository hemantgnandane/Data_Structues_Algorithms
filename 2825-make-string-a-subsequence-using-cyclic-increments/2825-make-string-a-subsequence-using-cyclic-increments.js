/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(t, s) {
    let i = j = 0;

    while(j<t.length ){
        if(i == s.length) break;
        if(s[i] == t[j] ){
            i++;
            j++;
        }
        else if((t[j].charCodeAt(0) + 1 - 97)%26 === (s[i].charCodeAt(0) - 97)){
            console.log(i + " " + j);
            i++;
            j++;
        }
        else j++;
    }

    return i == s.length;
};