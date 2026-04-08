/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let map = new Map();

    map.set(s[0], 1);
    let count = 0;


    for(let i = 1; i<s.length;i++){
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i]) + 1);
        }
        else{
            map.set(s[i], 1);
        }

        if(map.get(s[i]) == 2 ){
            map = new Map();
            i--;
            count++;
        }
    }

    return count+1;
};