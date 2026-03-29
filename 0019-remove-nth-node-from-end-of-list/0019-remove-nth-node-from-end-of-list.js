/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //sentinetal node, second pointer, first pointer
    let senti = new ListNode();
    senti.next = head;

    let sptr = senti;
    let fptr = senti;

    for(let i = 0; i<n;i++){
        fptr = fptr.next;
    }


    // traverse two pointer
    while(fptr.next){
        sptr = sptr.next;
        fptr = fptr.next;
    }

    // sptr = sptr.next;
    //delete    
    sptr.next = sptr.next.next;



    //return 
    return senti.next;
    
};