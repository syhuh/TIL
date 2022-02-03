class Queue {
  constructor(){
    this.array = [];
  }

  peek(){
    return this.array[0];
  }

  enqueue(val){
    this.array.push(val);   
    return this;
  }

  dequeue(){  
    // TBD : I have to  use only push, or pop.   
    return this.array.shift();
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
console.log('peek: ', myQueue.peek());        //1
console.log('dequeue: ', myQueue.dequeue());  //1
console.log('peek: ', myQueue.peek());        //2
console.log('dequeue: ', myQueue.dequeue());  //2
console.log('peek: ', myQueue.peek());        //3
console.log('dequeue: ', myQueue.dequeue());  //3
console.log('peek: ', myQueue.peek());        //4
console.log('dequeue: ', myQueue.dequeue());  //4
myQueue.enqueue(6);
myQueue.enqueue(7);
console.log('peek: ', myQueue.peek());        //5
console.log('dequeue: ', myQueue.dequeue());  //5
console.log('peek: ', myQueue.peek());        //6
console.log('dequeue: ', myQueue.dequeue());  //6
console.log('peek: ', myQueue.peek());        //7
console.log('dequeue: ', myQueue.dequeue());  //7
console.log('peek: ', myQueue.peek());        //null
console.log('dequeue: ', myQueue.dequeue());  //null

// myQueue.enqueue({
//   id: 1, 
//   name: 'John',
//   hobby: 'Reading'
// });
// myQueue.enqueue({
//   id: 2,
//   name: 'Yoel',
//   job: 'Musician'
// });
// myQueue.enqueue({
//   id: 3,
//   name: 'Kai',
//   owe: 'Fish'
// })
// console.log('peek: ', myQueue.peek());        
// console.log('dequeue: ', myQueue.dequeue());  
// console.log('peek: ', myQueue.peek());        
// console.log('dequeue: ', myQueue.dequeue());  
// console.log('peek: ', myQueue.peek());        
// console.log('dequeue: ', myQueue.dequeue());  
// console.log('peek: ', myQueue.peek());        
// console.log('dequeue: ', myQueue.dequeue());  