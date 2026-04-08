/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {

    let cr = 0; 
    let cl = 0; 
    let count = 0;

    for(let i = 0; i< s.length; i++){
        if(s[i] == 'R') cr++;
        if(s[i] == 'L') cl++;


        if(cr == cl){
            console.log(cr + " " + cl);
            count++;
            cr = 0;
            cl = 0;
        }
    }

    return count;
    
};