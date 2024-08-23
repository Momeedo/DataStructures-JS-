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

  pop() {
    if (!this.head) return undefined; //LL is empty

    let temp = this.head;
    let pre = this.head;

    //The while loop won't execute if the LL has only one Node
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  //Creates a new Node & adds it to the start
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //Creates a new Node & inserts it
  insert(value) {}
}

let myLinkedList = new LinkedList(7);
myLinkedList.push(4);
myLinkedList.push(6);
myLinkedList.push(8);

console.log(myLinkedList);

console.log(myLinkedList.pop());
console.log(myLinkedList.pop());

console.log(myLinkedList);

myLinkedList.unshift(2);

console.log(myLinkedList);
