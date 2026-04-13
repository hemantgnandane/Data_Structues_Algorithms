/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(words) {
    let ans = [];

    let map  = new Map();

    let k = 0;
    

    for(let i = 0 ; i<words.length; i++){

        let s = words[i].split('').sort().join('');
        // console.log(words[i] + " "  + s);
        // console.log(map);
        // console.log(ans);
        if(map.has(s)){
            let p = map.get(s);
            let arr = ans[p];
            arr.push(words[i]);
        }
        else{
            map.set(s, k);
            ans[k] = [words[i]];
            k++;
            
        }
    }

    return ans;
};