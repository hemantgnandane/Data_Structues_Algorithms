/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {

    let a = Math.floor(s.length/k);

    let arr = [];
    let i =0;

    for( let j = 0; j<a; j++){
        arr.push(s.slice(i, i + k));
        i = i + k;
    }


    if(i == s.length) return arr;
    console.log(i);
    let str = "";

    while(k>0){
        if(i<s.length){
            str = str + s[i];
            i++;
        }
        else{
            str = str + fill;
        }
        k--;
    }


    arr.push(str);

    return arr;
    
};