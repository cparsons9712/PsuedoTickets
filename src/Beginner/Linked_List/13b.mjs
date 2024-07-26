/*************************************
 * HELPER FUNCTIONS- DO NOT CHANGE
 * ---- for your reference only -----
 ***************************************/
export class warehouseOrder {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
}

export function createLinkedList(values, cycleIndex = -1) {
    if (!Array.isArray(values) || values.length === 0) {
      return null;
    }

    const nodes = values.map(value => new warehouseOrder(value));
    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1];
    }

    if (cycleIndex >= 0 && cycleIndex < nodes.length) {
      nodes[nodes.length - 1].next = nodes[cycleIndex];
    }

    return nodes[0];
}

/********************************
 * END OF HELPER FUNCTIONS
 * -----------------------------
 * Write your code below
 ********************************/

export function detectCycle(head) {
    // Your Code Here
}
