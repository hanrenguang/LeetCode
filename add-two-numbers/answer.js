/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const res = new ListNode(0);
    let temp = res;
    let plusFlag = 0;
    let plusVal = 0;

    do {
        temp = temp.next || temp;
        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val : 0;
        plusVal = l1Val + l2Val + plusFlag;
        plusFlag = 0;
        if (plusVal >= 10) {
            plusFlag = 1;
            plusVal %= 10;
        }
        temp.val = plusVal;
        plusVal = 0;
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
    } while ((l1 || l2) && (temp.next = new ListNode(0)));

    if (plusFlag) {
        temp.next = new ListNode(1);
    }

    return res;
};