/*************************************
 * HELPER FUNCTIONS- DO NOT CHANGE
 * ---- for your reference only -----
 ***************************************/
export const createLinkedList = (values) => {
    let head = null;
    let current = null;
    for (const value of values) {
      const newNode = { value, next: null };
      if (!head) {
        head = newNode;
        current = head;
      } else {
        current.next = newNode;
        current = newNode;
      }
    }
    return head;
}



/********************************
 * END OF HELPER FUNCTIONS
 * -----------------------------
 * Write your code below
 ********************************/


export const findIntersectionNode = (listA, listB) => {

    // your code here

};
