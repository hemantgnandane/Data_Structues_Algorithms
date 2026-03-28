/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let sp = head;
    let fp = head;

    while(fp && fp.next){
       
        sp = sp.next;
        fp = fp.next.next;

         if(sp === fp){
            return true;
        }
    }
    return false;
    
};