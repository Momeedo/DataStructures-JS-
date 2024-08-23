class Node {
  //Creating a Node
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    //Creates a new Node
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  //Creates a new Node & adds it to the end
  push(value) {
    const newNode = new Node(value);

    //If there's no nodes in the LL, Head and Tail will point to the new Node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {}

  //Creates a new Node & adds it to the start
  unshit(value) {}

  //Creates a new Node & inserts it
  insert(value) {}
}

let myLinkedList = new LinkedList(7);
myLinkedList.push(4);

console.log("Output:");
console.log(myLinkedList);
