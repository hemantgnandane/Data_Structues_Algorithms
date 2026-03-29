/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    //calculate length
    let len = 0;
    let ptr = head;
    while(head){
        head = head.next;
        len++;
    }
    console.log(len);
    head = ptr;

    for(let i = 0; i<Math.floor(len/2); i++){
        ptr = ptr.next;
    }

    console.log();

console.log(ptr.val)


    //reverse the second half

    let prev = null;
    let curr = ptr;

    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }



    //compare and find max
    let max = 0;

    while(prev){
        let sum = prev.val + head.val;
        console.log(sum)
        max = Math.max(max, sum);
        prev = prev.next;
        head = head.next;

        
        
    }


    return max;
    
};