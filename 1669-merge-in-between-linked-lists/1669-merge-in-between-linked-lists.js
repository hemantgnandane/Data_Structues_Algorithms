/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let dummy = new ListNode();
    dummy.next = list1;

    for(let i = 0; i<a - 1; i++){
        list1 = list1.next;
    }
    console.log(list1.val);
    let ptr = list1;
    list1 = list1.next;

    for(let i = 0; i < b -a; i++){
        list1 = list1.next;
    }
    list1 = list1.next;
    console.log(list1.val);
    let ptr2 = list1;

    
    ptr.next =list2;

    while(list2.next){
        list2 = list2.next;
    }

    list2.next = ptr2;

    list1 = dummy.next;

    while(list1){
        console.log(list1.val);
        list1 = list1.next;
    }
    // console.log(list1.val);

    
    list2.next = ptr2;

    return dummy.next;
};