
/*************************************
 * HELPER FUNCTIONS- DO NOT CHANGE
 * ---- for your reference only -----
 ***************************************/
export const createLinkedList = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return null;

    let head = { val: arr[0], next: null };
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = { val: arr[i], next: null };
        current = current.next;
    }

    return head;
}

const taskList = createLinkedList([1, 2, 3, 4, 5]);

/********************************
 * END OF HELPER FUNCTIONS
 * -----------------------------
 * Write your code below
 ********************************/


export const removeNthFromEnd = (head, n) => {

    //Your Code Here

}
