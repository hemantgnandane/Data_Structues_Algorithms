/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let ans = [];

    for(let i = left; i<=right ; i++){
        let bool =  true;
        let num = i;
        while(num!=0){
            let k = num%10;
            num = Math.floor(num/10);
            if(i%k != 0){
                bool = false;
                break;}
        }

        if(bool) ans.push(i);
    }

    return ans;
};