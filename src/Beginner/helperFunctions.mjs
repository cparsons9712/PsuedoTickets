export class runnerStat {
    constructor(checkpointID, time, heartRate, speed, splitTime, next = null) {
      this.checkpointID = checkpointID;
      this.time = time;
      this.heartRate = heartRate;
      this.speed = speed;
      this.splitTime = splitTime;
      this.next = next;
    }
  }

  export class warehouseOrder {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  export class ListNode {
    constructor(score, next = null) {
      this.score = score;
      this.next = next;
    }
  }

  export const createLinkedList = (values, cycleIndex = -1) => {
    if (!values.length) return null;
    const nodes = values.map(value => new ListNode(value));
    nodes.forEach((node, index) => {
      node.next = nodes[index + 1] || null;
    });
    if (cycleIndex >= 0 && cycleIndex < nodes.length) {
      nodes[nodes.length - 1].next = nodes[cycleIndex];
    }
    return nodes[0];
  };

  export const printList = (head) => {
    let current = head;
    const result = [];
    while (current !== null) {
      result.push(current.score);
      current = current.next;
    }
    return result;
  };
