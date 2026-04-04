/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let arr = [];
    
    let j = 0;

    for(let i = 0; i<words.length; i++){
        if(words[i].includes(x)){
            arr[j] = i;
            j++;
        }
    }
    return arr;    
};