/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let x = 0; 
    let y = s.length-1;
    const arr = s.split('');
    while(x<y){
        if(isVowel(arr[x]) && isVowel(arr[y])){
            let c =  arr[x];
            arr[x] = arr[y];
            arr[y] = c;
            x++;
            y--;
        }

        if(!isVowel(arr[x])) x++;
        else if(!isVowel(arr[y])) y--;
        // console.log(arr)
    }

    return arr.join('');
    
};

var isVowel = function(ch) {
    return "aeiouAEIOU".includes(ch);
}