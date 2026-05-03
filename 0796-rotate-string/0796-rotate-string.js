/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s==goal) return true;
    for(let i = 1; i<s.length; i++) {
      let p =  s.substring(0, i);
       let q = s.substring(i, s.length);
        if(q+p == goal) return true;

    }
    return false;
};