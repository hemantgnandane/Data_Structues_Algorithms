/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = [] ;
    let cur = head;
    let i = 0;
    while(cur){
        arr[i] = cur.val;
        cur = cur.next;
        i++;
    } 
    console.log(arr);
    let k = Math.floor(arr.length/2);
    let l = arr.length-1;

    for(let j = 0; j<k; j++){
        console.log(arr[j] + " " + arr[l-j])
        if(arr[j]!=arr[l - j]){
            return false;
        }
    }

    return true;
};