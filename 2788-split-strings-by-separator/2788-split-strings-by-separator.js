/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let ans = [];

    for(let i = 0; i<words.length; i++){
        let arr = words[i].split(separator);

        console.log(arr)

        for(let j =0; j<arr.length; j++){
            if(arr[j] != '')
            ans.push(arr[j]);
        }
    }
    return ans;
    
};