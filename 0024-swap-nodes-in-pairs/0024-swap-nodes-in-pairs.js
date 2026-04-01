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
    
    return solve(head);
};

var solve = function(curr){

    if(curr == null || curr.next == null) return curr;

   let a = curr;
   let b = curr.next;

   a.next = solve(b.next);
   b.next = a;

   return b;
}