class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    let output = "";
    if (temp === null) {
      console.log("empty");
      return;
    }
    while (temp !== null) {
      output += String(temp.value);
      temp = temp.next;
      if (temp !== null) {
        output += " -> ";
      }
    }
    console.log(output);
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  reverseBetween(m, n) {
    // Check if the list is empty. If it is, no action is needed.
    if (this.head === null) return;

    // Create a dummy node. This is a common technique used in linked list problems
    // to simplify edge cases, like when modifying the head of the list.
    const dummy = new Node(0);

    // Link this dummy node to the head of the list.
    // Now, dummy acts as a precursor to the head node.
    dummy.next = this.head;

    // 'prev' will eventually point to the node just before the start of the reversal.
    // Initially, 'prev' is set to the dummy node.
    let prev = dummy;

    // Iterate to position 'prev' to the node just before where reversal begins.
    // Since indices are 0-based, this loop moves 'prev' 'm' nodes forward.
    for (let i = 0; i < m; i++) {
      prev = prev.next;
    }

    // 'current' points to the first node that will be reversed.
    // This is the mth node in the list (considering 0-based indexing).
    let current = prev.next;

    // The loop for the actual reversal of the segment between m and n.
    // It runs (n - m) times, moving each node in turn to the position after 'prev'.
    for (let i = 0; i < n - m; i++) {
      // 'temp' temporarily stores the next node in line to be moved.
      const temp = current.next;

      // Bypass 'temp' in the current positioning.
      current.next = temp.next;

      // Insert 'temp' between 'prev' and 'prev.next'.
      // This step effectively moves 'temp' to the front of the reversal segment.
      temp.next = prev.next;
      prev.next = temp;
    }

    // Update the head of the list if the head was part of the reversal.
    // This is where the dummy node becomes useful, as it simplifies this operation.
    this.head = dummy.next;
  }

  reverseBetweenWithoutComments(m, n) {
    if (this.head === null) return;

    const dummy = new Node(0);
    dummy.next = this.head;
    let prev = dummy;

    for (let i = 0; i < m; i++) {
      prev = prev.next;
    }

    let current = prev.next;
    for (let i = 0; i < n - m; i++) {
      const temp = current.next;
      current.next = temp.next;
      temp.next = prev.next;
      prev.next = temp;
    }
    this.head = dummy.next;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();
console.log("----------------");

const m = 2;
const n = 4;
myLinkedList.reverseBetween(m, n);

console.log(`\nList after reversing between indexes of ${m} and ${n}:`);
myLinkedList.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1 -> 2 -> 3 -> 4 -> 5
    List after reversing between indexes of 2 and 4:
    1 -> 2 -> 5 -> 4 -> 3
*/

console.log("\n\n----------------");
console.log("----------------\n\n");


let myLinkedList2 = new LinkedList(1);
myLinkedList2.push(2);
myLinkedList2.push(3);
myLinkedList2.push(4);
myLinkedList2.push(5);
myLinkedList2.push(6);
myLinkedList2.push(7);
myLinkedList2.push(8);
myLinkedList2.push(9);
myLinkedList2.push(10);

console.log("Original list:");
myLinkedList2.printList();
console.log("----------------");

const m2 = 2;
const n2 = 6;
myLinkedList2.reverseBetween(m2, n2);

console.log(`\nList after reversing between indexes of ${m2} and ${n2}:`);
myLinkedList2.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10
    List after reversing between indexes of 2 and 6:
    1 -> 2 -> 7 -> 6 -> 5 -> 4 -> 3 -> 8 -> 9 -> 10
*/