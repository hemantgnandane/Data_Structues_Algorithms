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

    let senti = new ListNode();
    senti.next = head;
    let len = 0;
    while(head){
        head = head.next;
        len++;
    }
    let pren = len - n;

    let prev = senti;

    for(let i = 0; i< pren; i++){
        prev = prev.next;
    }

    prev.next = prev.next.next;

    console.log(len);
    return senti.next;
    
};