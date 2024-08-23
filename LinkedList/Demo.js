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
  push(value) {
    //Creates a new Node & adds it to the end
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
  unshit(value) {
    //Creates a new Node & adds it to the start
  }
  insert(value) {
    //Creates a new Node & inserts it
  }
}

let myLinkedList = new LinkedList(7);
myLinkedList.push(4);

console.log("Output:");
console.log(myLinkedList);
