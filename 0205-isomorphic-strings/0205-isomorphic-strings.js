/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    let map = new Map();

    for(let i = 0; i<s.length; i++){
        // console.log(map)
        const valuesArr = [...map.values()];
// console.log(valuesArr);
        let a = s[i];
        let b = t[i];

        if(!map.has(a)){
            if(valuesArr.includes(b)) return false;
            else
             map.set(a, b);}

        else{
            if(b != map.get(a)) return false;
        }

        
    }

    return true;
};