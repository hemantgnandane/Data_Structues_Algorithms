/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let i = j =0;

    while(j<s.length){
        if(i == t.length) return 0;
        if(t[i] == s[j]){
            i++;
            j++;
        }
        else j++;
    }

    console.log(i + " " + j);

    return t.length - i;
};