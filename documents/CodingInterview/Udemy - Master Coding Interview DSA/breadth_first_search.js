class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(val){
    const newNode = new Node(val);

    if(this.root === null){
      this.root = newNode;      
    }
    else {
      let currNode = this.root;
      while(true){
        if(newNode.val < currNode.val){
          if(currNode.left === null){
            currNode.left = newNode;
            break;
          }
          else{
            currNode = currNode.left;
          }
        }
        else if(newNode.val > currNode.val){
          if(currNode.right === null) {
            currNode.right = newNode;
            break;
          }
          else{
            currNode = currNode.right;
          }
        }
        else {
          console.log("Can not insert existing value!");
          break;
        }
      }
    }  
    
    return this;
  }

  lookup(val){
    let currNode = this.root;
    let out = false;
    
    while(currNode) {
      if(val < currNode.val){        
        currNode = currNode.left;        
      }
      else if(val > currNode.val){
        currNode = currNode.right;
      }      
      else {
        out = true;
        break;
      }      
    }

    return out;
  }

  remove(val){

  }

  breadthFirstSearch(){
    let currNode = this.root;
    let list = [];
    let queue = []

    queue.push(currNode);
    while(queue.length > 0){
      currNode = queue.shift();
      list.push(currNode.val);

      if(currNode.left){
        queue.push(currNode.left);
      }

      if(currNode.right){
        queue.push(currNode.right);
      }
    }

    return list;
  }

  breadthFirstSearchR(queue, list){
    if(!queue.length){
      return list;
    }

    let currNode = queue.shift();
    list.push(currNode.val);

    if(currNode.left){
      queue.push(currNode.left);
    }

    if(currNode.right){
      queue.push(currNode.right);
    }

    //this.breadthFirstSearchR(queue, list); // Don't do this. You must return or you will get undefined.
    return this.breadthFirstSearchR(queue, list);
  }
}

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);
console.log("Result of breadthFirstSearch: ", bst.breadthFirstSearch());
console.log("Result of breadthFirstSearchR(Recursion): ", bst.breadthFirstSearchR([bst.root], []));

//         9
//    4          20
// 1     6   15      170

