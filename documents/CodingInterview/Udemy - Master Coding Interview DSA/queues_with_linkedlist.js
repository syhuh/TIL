class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek(){
    if(this.first !== null){
      return this.first.val;
    }
    else{
      return null;
    }    
  }

  enqueue(val){
    const newNode = new Node(val);   

    if(this.length === 0){      
      this.first = this.last = newNode;
    }
    else {      
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;

    return this;
  }

  dequeue(){    
    if(this.first == null) {
      return null;
    }

    if(this.first === this.last) {
      this.last = null;
    }

    const out = this.first.val;
    this.first = this.first.next;

    this.length--;

    return out;
  }
}

const myQueue = new Queue();
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);
// myQueue.enqueue(4);
// myQueue.enqueue(5);
// console.log('peek: ', myQueue.peek());        //1
// console.log('dequeue: ', myQueue.dequeue());  //1
// console.log('peek: ', myQueue.peek());        //2
// console.log('dequeue: ', myQueue.dequeue());  //2
// console.log('peek: ', myQueue.peek());        //3
// console.log('dequeue: ', myQueue.dequeue());  //3
// console.log('peek: ', myQueue.peek());        //4
// console.log('dequeue: ', myQueue.dequeue());  //4
// myQueue.enqueue(6);
// myQueue.enqueue(7);
// console.log('peek: ', myQueue.peek());        //5
// console.log('dequeue: ', myQueue.dequeue());  //5
// console.log('peek: ', myQueue.peek());        //6
// console.log('dequeue: ', myQueue.dequeue());  //6
// console.log('peek: ', myQueue.peek());        //7
// console.log('dequeue: ', myQueue.dequeue());  //7
// console.log('peek: ', myQueue.peek());        //null
// console.log('dequeue: ', myQueue.dequeue());  //null
myQueue.enqueue({
  id: 1, 
  name: 'John',
  hobby: 'Reading'
});
myQueue.enqueue({
  id: 2,
  name: 'Yoel',
  job: 'Musician'
});
myQueue.enqueue({
  id: 3,
  name: 'Kai',
  owe: 'Fish'
})
console.log('peek: ', myQueue.peek());        
console.log('dequeue: ', myQueue.dequeue());  
console.log('peek: ', myQueue.peek());        
console.log('dequeue: ', myQueue.dequeue());  
console.log('peek: ', myQueue.peek());        
console.log('dequeue: ', myQueue.dequeue());  
console.log('peek: ', myQueue.peek());        
console.log('dequeue: ', myQueue.dequeue());  