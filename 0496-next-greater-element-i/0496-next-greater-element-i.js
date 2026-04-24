/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    

    let ans = [];

    for(let i = 0; i< nums1.length; i++){
        let bool = false;
        let val = nums1[i];
        for(let j= 0; j<nums2.length; j++){
            if(bool){
                // console.log(j)
               if( nums2[j] > val){
                // console.log( i)
                    ans.push(nums2[j]);
                    bool = false;
                    }
            }
            if(nums2[j] == val) bool = true;
        }

        if(bool) ans.push(-1);
    }

    return ans;
};