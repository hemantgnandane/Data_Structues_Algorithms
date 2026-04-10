/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    // let str = "";
    for(let i = num.length-1; i>=0; i--){
        let a = num[i] - '0';
    
        if(a%2!=0){
            return num.slice(0, i+1);
        }
    }

    return "";
};