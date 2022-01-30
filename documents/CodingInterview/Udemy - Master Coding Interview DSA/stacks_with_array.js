class Stack {
  constructor(){
    this.array = [];
  }

  peek(){
    return this.array[this.array.length - 1];     
  }

  push(val){
    this.array.push(val);
    return this;
  }

  pop(){
    return this.array.pop();    
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
console.log('peek: ', myStack.peek());  //5
console.log('pop: ', myStack.pop());    //5
console.log('peek: ', myStack.peek());  //4
console.log('pop: ', myStack.pop());    //4
console.log('peek: ', myStack.peek());  //3
console.log('pop: ', myStack.pop());    //3
console.log('peek: ', myStack.peek());  //2
console.log('pop: ', myStack.pop());    //2
console.log('peek: ', myStack.peek());  //1
console.log('pop: ', myStack.pop());    //1
console.log('peek: ', myStack.peek());  //null
console.log('pop: ', myStack.pop());    //null

