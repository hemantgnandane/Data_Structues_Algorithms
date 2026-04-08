/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let temp = num;
    let count = 0;

    while(num){
        let a = num %10;
        console.log(a);
        console.log(num);
        num = Math.floor(num/10);
        console.log(num);
        if(temp%a == 0) count++;

    }

    return count;
};