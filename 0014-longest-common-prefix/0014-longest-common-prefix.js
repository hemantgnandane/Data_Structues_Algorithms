/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
let pre = "";
    for(let i = 0; i<strs[0].length; i++){
       
        
        let pre2 = strs[0][i];
 console.log(i + " " + pre + " " + pre2);
        for(let j = 1; j<strs.length; j++){
            if(strs[j][i] != pre2){
                return pre;
            }
        }
        pre = pre + pre2;

        console.log(pre + " " + pre2);
    }
    return pre;
};