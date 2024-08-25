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

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;

      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;

    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index >= this.length) return false;

    const newNode = new Node(value);

    let prev = this.get(index - 1);
    let next = prev.next;

    prev.next = newNode;
    newNode.prev = prev;
    newNode.next = next;
    next.prev = newNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    if (index < 0 || index >= this.length) return false;

    let temp = this.get(index);

    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.prev = null;
    temp.next = null;

    this.length--;

    return temp;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(4);
myDoublyLinkedList.push(5);
console.log(myDoublyLinkedList);

console.log("\n\n----------------");
console.log("----------------\n\n");

myDoublyLinkedList.pop();
console.log(myDoublyLinkedList);

console.log("\n\n----------------");
console.log("----------------\n\n");

myDoublyLinkedList.unshift(0);
console.log(myDoublyLinkedList);

console.log("\n\n----------------");
console.log("----------------\n\n");

myDoublyLinkedList.shift();
console.log(myDoublyLinkedList);

console.log("\n\n----------------");
console.log("----------------\n\n");

console.log("Get Node 2:");
console.log(myDoublyLinkedList.get(2));

console.log("\n\n----------------");
console.log("----------------\n\n");

myDoublyLinkedList.insert(3, 3);
console.log(myDoublyLinkedList);
console.log("Get Node 3:");
console.log(myDoublyLinkedList.get(3));
