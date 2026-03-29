/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    let arr = s.split(' ');
    console.log(arr);
    let num = 0;

    for(let i = 0; i<arr.length; i++){
        if(isNumericString(arr[i])){
            console.log("i am here")
            let k = arr[i] - '0';
            if(num < k){
                num = k;
            }
            else{
                console.log(arr[i] + " " + num)
                return false;
            }

        }
    }

    return true;
};


function isNumericString(str) {
  return !isNaN(str) && str.trim() !== "";
}

// console.log(isNumericString("123"));   // true
// console.log(isNumericString("12.5"));  // true
// console.log(isNumericString("-10"));   // true
// console.log(isNumericString("abc"));   // false
// console.log(isNumericString("12a"));   // false
// console.log(isNumericString(""));      // false