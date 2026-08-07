/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let map = new Map();


    for(let i = 0; i<s1.length; i++){
        if(map.has(s1[i])) map.set(s1[i], map.get(s1[i]) + 1);
        else map.set(s1[i], 1);
    }
    

    for(let i  = 0; i< s2.length - s1.length + 1; i++){
        const map2 = new Map(map);
        for(let j = i; j<= i + s1.length; j++){
            if(!map2.has(s2[j])) break;
            else{
                if(map2.get(s2[j]) === 1) {
                     map2.delete(s2[j]);
                } else {
                    map2.set(s2[j], map2.get(s2[j]) - 1);
        }
            }
        }
        console.log(s2[i]);
        console.log(map2)
        if(map2.size == 0) return true;
    }

    return false;
};