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
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;
    let len = 0;
    
    let ptr = head;

    while(ptr){
        ptr = ptr.next;
        len++;
    }

    console.log(len);
    console.log(k%len);
    let num = k%len;
    if(num==0) return head;
    let c = len - num;
    ptr = head;

    for(let i =1; i<c; i++){
        ptr = ptr.next;
    }
    // console.log(ptr.val);
    let ptr2 =  ptr.next;
    ptr.next = null;
    let dummy = ptr2;
    while(ptr2.next){
        ptr2 = ptr2.next;
    }
    ptr2.next = head;


    return dummy;
};