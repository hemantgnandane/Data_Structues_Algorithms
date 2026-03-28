/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // put all nodes of a ll in set
  

    let store = new Set();
    while(headB){
        store.add(headB);
        headB = headB.next;
    }
    // console.log(store);

    // check if node of another list exist in set

    while(headA){
        if(store.has(headA)) {
            // console.log(headA.val)
            return headA;
            }
        headA = headA.next;
    }

    return null;
};