/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    let map = new Set();
    return solve(n, map);

   }


   var solve = function(n, map){
    
    console.log(map);
    if(n == 1) return true;
    else if(map.has(n)) return false;
   else{
    let sum = 0;
    let tmp = n;
    while(n){
        let a = Math.floor(n%10);
        sum = sum + a*a;
        n = Math.floor(n/10);
        
    }
    console.log(tmp)
    // console.log(sum);
    map.add(tmp);

    return solve(sum, map);
   }
      
    
};

