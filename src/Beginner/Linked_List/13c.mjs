export class ListNode {
    constructor(score, next = null) {
      this.score = score;
      this.next = next;
    }
}


function mergeSortedLists(list1, list2) {
    const dummy = new ListNode(0);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
      if (list1.score <= list2.score) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
    if (list1 !== null) current.next = list1;
    if (list2 !== null) current.next = list2;

    return dummy.next;
  }

  export default mergeSortedLists;
