/*************************************
 * HELPER FUNCTIONS- DO NOT CHANGE
 * ---- for your reference only -----
 ***************************************/
export class ListNode {
    constructor(score, next = null) {
      this.score = score;
      this.next = next;
    }
}
export const printList = (head) => {
    let current = head;
    const result = [];
    while (current !== null) {
      result.push(current.score);
      current = current.next;
    }
    return result;
  };


/********************************
 * END OF HELPER FUNCTIONS
 * -----------------------------
 * Write your code below
 ********************************/

function mergeSortedLists(list1, list2) {

//your code here

}

export default mergeSortedLists;
