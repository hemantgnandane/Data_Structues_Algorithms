/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    //corener cases
    if(!head || !head.next) return head;

    //find the len of ll
    let len = 0;
    let aptr = head;
    while(aptr){
        aptr = aptr.next;
        len++;
    }
    aptr = head;
    len = Math.floor(len/2) ;

    //traverse
   let odd = head;
   let even = head.next;
   let temp = even;

   while(odd.next && even.next){
    //connext odd nodes
    odd.next = odd.next.next;

    //connect even nodes
    even.next = even.next.next;

    odd = odd.next;
    even = even.next;
   }

   //connect last of odd node to even
   odd.next = temp;

   console.log(odd.val )
    
    return head;
};