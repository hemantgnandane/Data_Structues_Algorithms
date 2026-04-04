/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
     //create hashmap and max 
        let map = new Map();
        let max1 = 0; 
        let max2 = 0;

        //travere through string and check if it exist 
        for(let i =0; i<s.length; i++){
            let ch = s[i];
            if(map.has(ch))
            map.set(ch, map.get(ch) + 1);
            else map.set(ch, 1);


            if("aeiouAEIOU".includes(ch)){
                max1 = Math.max(max1, map.get(ch));
            }
            else{
              max2 = Math.max(max2, map.get(ch));
            }
        }

        return max1 + max2;
};