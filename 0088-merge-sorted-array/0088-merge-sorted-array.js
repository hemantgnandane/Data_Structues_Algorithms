/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(n1, m, n2, n) {
   
    let p1= m-1;
    let p2 = n-1;

    for(let i = m+n-1; i>=0; i--){
        if(p2<0) break;
        if((n1[p1]>n2[p2]) && p1>=0){
            n1[i] = n1[p1];
            p1--;
        }
        else{
            n1[i] = n2[p2];
            p2--;
        }
        console.log(p1 + " " + p2)
    }
    return n1;
};