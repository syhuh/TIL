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

    // My 1st trial
    // let out;

    // while(true){      
    //   if(val < currNode.val){
    //     if(currNode.left === null){
    //       out = false;          
    //       break;
    //     }
    //     else{
    //       currNode = currNode.left;
    //     }
    //   }
    //   else if(val > currNode.val){
    //     if(currNode.right === null) {
    //       out = false;   
    //       break;
    //     }
    //     else{
    //       currNode = currNode.right;
    //     }
    //   }
    //   else {
    //     out = true;
    //     break;
    //   }      
    // }

    // After see the Andrei's solution
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
}

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);

//         9
//    4          20
// 1     6   15      170

const log = JSON.stringify(traverse(bst.root));
console.log(log);

let found = bst.lookup(9);
console.log("Find 9: ", found);
found = bst.lookup(4);
console.log("Find 4: ", found);
found = bst.lookup(1);
console.log("Find 1: ", found);
found = bst.lookup(6);
console.log("Find 6: ", found);
found = bst.lookup(20);
console.log("Find 20: ", found);
found = bst.lookup(15);
console.log("Find 15: ", found);
found = bst.lookup(170);
console.log("Find 170: ", found);
found = bst.lookup(7);
console.log("Find 7: ", found);

function traverse(node) {
  const tree = { value:node.val };

  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);

  return tree;
}
