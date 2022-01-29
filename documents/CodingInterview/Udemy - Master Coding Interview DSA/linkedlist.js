class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(val){        
    this.head = new Node(val); 
    this.tail = this.head;
    this.length = 1;
  }

  printList(){
    let list = [];
    let currNode = this.head;

    while (currNode !== null) {
      list.push(currNode.val); 
      currNode = currNode.next;
    }    

    console.log(list.join('->'));
  }

  append(val) {       
    const newNode = new Node(val);

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    return this;
  }

  prepend(val) {    
    const newNode =new Node(val);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    return this;
  }

  insert(index, val) {
    // check params
    if (index >= this.length){
      this.append(val);
      return this;
    }
    let i = 0;
    let prevNode = this.head;

    while(i < index - 1){
      prevNode = prevNode.next;
      i++;
    }

    const newNode = new Node(val);    
    newNode.next = prevNode.next;
    prevNode.next = newNode;

    this.length++;
    return this;
  }

  remove(index) {
    // check params
    if (index >= this.length){
      return this;
    }

    let i = 0
    let prevNode = this.head

    while (i < index - 1) {
      prevNode = prevNode.next;
      i++;
    }

    let currNode = prevNode.next;
    prevNode.next = currNode.next;
    //delete currNode;

    this.length--;
    return this;    
  }

  reverse() {
    //KaiOwn 1st method: prepend & remove method
    // let node = this.head.next;
    // let length = this.length;

    // for(let i = 0; i < length - 1; i++){               
    //   this.prepend(node.val);
    //   node = node.next;        
    // }      

    // this.printList(); 
    
    // for(let i = length - 1; i > 0; i--){
    //   this.remove(this.length - 1);
    // }

    //After see the Andrei's solution
    //KaiReview 1st
    let f = this.head;  // f: first
    let s;              // s: second

    while(f.next !== null){    
      s = f.next;  
      f.next = s.next;
      s.next = this.head;      
      this.head = s;
    }    
    this.tail = f;
  }
}

// Test append
// const myLinkedList = new LinkedList(1);
// myLinkedList.append(2);
// myLinkedList.append(3);
// myLinkedList.append(4);
// myLinkedList.append(5);
// myLinkedList.append(6);
// myLinkedList.append(7);
// myLinkedList.printList();

// Test prepend
// const myLinkedList = new LinkedList(10);
// myLinkedList.prepend(5);
// myLinkedList.prepend(16);
// myLinkedList.prepend(1);
// myLinkedList.printList();

// Test insert
// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.append(1);
// myLinkedList.append(3);
// myLinkedList.append(7);
// myLinkedList.append(2);
// myLinkedList.printList();
// myLinkedList.insert(2, 99);
// myLinkedList.printList();

// Test remove
// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.append(1);
// myLinkedList.append(3);
// myLinkedList.append(7);
// myLinkedList.append(2);
// myLinkedList.printList();
// myLinkedList.remove(2);
// myLinkedList.printList();

// Test reverse
const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.append(7);
myLinkedList.printList();
myLinkedList.reverse();
myLinkedList.printList();