/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = new Map();

    for(let i =0; i<s.length; i++){
        let ch = s[i];
        if(map.has(ch)){
            map.set(ch, map.get(ch) + 1);
        }
        else map.set(ch, 1);
    }


    for(let i =0; i<t.length; i++){
        let ch = t[i];
        if(map.has(ch)){
            map.set(ch, map.get(ch) - 1);
            if(map.get(ch) == 0) map.delete(ch);
        }
        else{
            return false;
        }
    }

    return (map.size == 0);
};