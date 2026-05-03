/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(nums) {
    let arr = Array(10).fill(0);
    // let map = new Map();

    for(let i = 0; i<nums.length; i++){
        let a = nums[i] - '0';
        console.log(a)
        arr[a]++; 
    }
    let bool = true;
    
    for(let i = 0; i<nums.length; i++){
        let a = nums[i] - '0';

        if(arr[i] != a){
            return false;
        }
    }
    

    console.log(arr);


    return true;
};