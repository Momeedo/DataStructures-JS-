class Node {
  //Creating a Node
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    //Creates a new Node
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

}

let myDoublyLinkedList = new DoublyLinkedList(1);
console.log(myDoublyLinkedList);
