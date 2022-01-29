class Node {
  constructor(val){
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
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

    console.log(list.join('<->'));
  }

  append(val) {       
    const newNode = new Node(val);

    newNode.prev = this.tail; // Added for DoublyLinkedList  
    this.tail.next = newNode;    
    this.tail = newNode;     

    this.length++;
    return this;
  }

  prepend(val) {    
    const newNode =new Node(val);        

    newNode.next = this.head;    
    this.head.prev = newNode; // Added for DoublyLinkedList  
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

    newNode.prev = prevNode;      // Added for DoublyLinkedList  
    newNode.next = prevNode.next;    
    prevNode.next = newNode;      
    newNode.next.prev = newNode;  // Added for DoublyLinkedList    

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
    currNode.next.prev = prevNode; // Added for DoublyLinkedList    
    //delete currNode;

    this.length--;
    return this;    
  }
}

// Test append
// const myLinkedList = new DoublyLinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.append(1);
// myLinkedList.append(3);
// myLinkedList.append(7);
// myLinkedList.append(2);
// myLinkedList.printList();


// Test prepend
// const myLinkedList = new DoublyLinkedList(10);
// myLinkedList.prepend(5);
// myLinkedList.prepend(16);
// myLinkedList.prepend(1);
// myLinkedList.printList();

// Test insert
// const myLinkedList = new DoublyLinkedList(10);
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
// const myLinkedList = new DoublyLinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.append(1);
// myLinkedList.append(3);
// myLinkedList.append(7);
// myLinkedList.append(2);
// myLinkedList.printList();
// myLinkedList.remove(2);
// myLinkedList.printList();