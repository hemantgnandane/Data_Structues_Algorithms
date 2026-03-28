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
    let slow = head; 
    let fast = head;
    let k = head;

    while(fast && fast.next){
        k = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    // k.next = null;

    let prev = null;
    let cur = slow;

    while(cur){
        let temp = cur.next;
       cur.next = prev;
       prev = cur;
       cur = temp;
    }
    cur = prev;

    while( cur){
        if(head.val != cur.val){
           return false;
        }

         head = head.next;
            cur = cur.next;
    }

return true;
    
};