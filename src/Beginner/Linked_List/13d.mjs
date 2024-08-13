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
    if (typeof n !== 'number' || n < 1 || !head || typeof head !== 'object' || !head.hasOwnProperty('next')) return null;

    let dummy = { next: head };
    let first = dummy;
    let second = dummy;

    for (let i = 0; i <= n; i++) {
        if (!first) return null;
        first = first.next;
    }

    while (first) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;
    return dummy.next;
}
