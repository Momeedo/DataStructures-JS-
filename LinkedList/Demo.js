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

  //Removes the first Node
  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;

    this.length--;
    if (this.length === 0) {
      //If this case, Head is already set to null
      this.tail = null;
    }

    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
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

  //Creates a new Node & inserts it
  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index >= this.length) return false;

    const newNode = new Node(value);
    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    if (index < 0 || index >= this.length) return undefined;

    let pre = this.get(index - 1);
    let temp = pre.next;
    pre.next = temp.next;
    temp.next = null;

    this.length--;
    return temp;
  }
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

myLinkedList.shift();

console.log(myLinkedList);

console.log("Get invalid Node:");
console.log(myLinkedList.get(-1));
console.log(myLinkedList.get(999));
console.log("Get Node 0:");
console.log(myLinkedList.get(0));

myLinkedList.set(0, 1);
console.log(myLinkedList);

myLinkedList.insert(1, 10);
console.log(myLinkedList);
console.log(myLinkedList.get(1));
