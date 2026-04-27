/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let arr = [];

    for(let i = 0; i<s.length; i++){
       let num = s.charCodeAt(i) - 97;
        arr[num] = (arr[num] || 0) + 1;
        // console.log(num)
    }


    console.log(arr);
    let k = arr[s.charCodeAt(0) - 97];
    console.log(arr[5])
    console.log(k)

    for(let i = 0; i< arr.length; i++){
        if(arr[i] != k && arr[i] !=undefined) return false;
    }

    return true;
};