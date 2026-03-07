/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let c = (s, k);
    console.log(c);
    let str = '';

    for(let i = 0; i<s.length; i = i + 2*k){
        str = str + reverse(s.substring(i ,i + 2 * k), k);
        console.log(s.substring(i, i + 2*k));
    }

    return str;
    
};

var reverse = function(str, k) {
    let b = k;
    const s = str.split('');
    for(let i = 0; i<Math.floor(b/2); i++){
        let c = s[i];
        s[i] = s[b-1-i];
        s[b-1-i] = c;
    }
    // console.log(s)
    return s.join('');
}
