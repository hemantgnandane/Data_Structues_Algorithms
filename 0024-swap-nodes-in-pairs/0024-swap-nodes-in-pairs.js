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
var swapPairs = function(head) {
   
   let prev = new LinkedList();
   
   prev.next = head;
   let dummy = prev;

   while(prev.next && prev.next.next){
    let a = prev.next;
    let b = a.next;


    a.next = b.next;
    b.next = a;
    prev.next = b;

    prev = a;
   }
    

    return dummy.next;
};