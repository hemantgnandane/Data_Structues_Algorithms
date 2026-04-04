/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let n = s.length - 1;

  while(n>=0){
    if(s[n] == " "){
       --n
    }
    else break;
  }
    console.log(n)
  let count = 0;

  while(n>=0){
    if(s[n] != " "){
        --n;
        count++;
        console.log(count)
    }
    else break
  }

  return count;
};