class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek(){
    if(this.top !== null){
      return this.top.val;
    }
    else {
      return null;
    }    
  }

  push(val){
    const newNode = new Node(val);

    if(this.length === 0){      
      this.top = newNode;
      this.bottom = newNode;
    }
    else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;
    return this;
  }

  pop(){
    if (this.top !== null){
      if (this.top === this.bottom){    
        this.bottom = null;        
      }

      const aNode = this.top;
      this.top = this.top.next;

      this.length--;
      return aNode.val;
    }
    else {
      return null;
    }

    
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

