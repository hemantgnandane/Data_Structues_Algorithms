/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let l = 0;
    let r = 0;
    let max = 0;

    while(r < s.length){
        // console.log(l +  " " + r + " " + max);
        // console.log(map);
        if(map.has(s[r]) && map.get(s[r]) >= l){
             l = map.get(s[r]) + 1;
            map.set(s[r], r);  
        }
        else{
           map.set(s[r], r);
           
        }
        r++;
        max = Math.max(max, r-l);

    }

    return max;
};