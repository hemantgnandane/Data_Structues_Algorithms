/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let len = 0; 
    let ptr = head;

    while(ptr){
        ptr = ptr.next;
        len++;
    }
    console.log(len);

    // console.log(len - 2*k);
    // k = len - 2 * k;

    // if(len%2!=0)  k++;
    
    let ptr1 = head;
    let ptr2 = head;
    for(let i = 1; i<k;i++){
    ptr1 = ptr1.next;
}

    for(let i = 0; i<len - k ;i++){
        ptr2 = ptr2.next;
    }
    console.log(ptr1.val + " " + ptr2.val);

    let temp = ptr1.val;
    ptr1.val = ptr2.val;
    ptr2.val = temp;


    console.log(ptr1.val + " " + ptr2.val);


    return head;
};