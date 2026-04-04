/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    let arr = s.split(" ");
    console.log(arr);

    return arr[arr.length -1].length;
};