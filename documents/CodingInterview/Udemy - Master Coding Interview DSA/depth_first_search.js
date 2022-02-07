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

  DFSInorder(){
    return this.traverseInOrder(this.root, []);
  }

  DFSPreorder(){
    return this.traversePreOrder(this.root, []);

  }

  DFSPostorder(){
    return this.traversePostOrder(this.root, []);
  }  

    

//         9
//    4          20
// 1     6   15      170

/*
DFS InOrder: 1, 4, 6, 9, 15, 20, 170
*/
  traverseInOrder(node, list){
    console.log(node.val);

    if(node.left){
      this.traverseInOrder(node.left, list);
    }
    list.push(node.val);
    if(node.right){
      this.traverseInOrder(node.right, list);
    }
    return list;
  }

  
//         9
//    4          20
// 1     6   15      170

/*
DFS PreOrder: 9, 4, 1, 6, 20, 15, 170
*/
  traversePreOrder(node, list){        
    console.log(node.val);
    list.push(node.val);

    if(node.left){
      this.traversePreOrder(node.left, list);
    }
    if(node.right){
      this.traversePreOrder(node.right, list);
    }  
    
    return list;
  }

  
//         9
//    4          20
// 1     6   15      170

/*
DFS PostOrder: 1, 6, 4, 15, 170, 20, 9
*/
  traversePostOrder(node, list){
    console.log(node.val);

    if(node.left){
      this.traversePostOrder(node.left, list);
    }
    if(node.right){
      this.traversePostOrder(node.right, list);
    }  

    list.push(node.val);

    return list;
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
console.log("Result of DFS Inorder: ", bst.DFSInorder());
console.log("Result of DFS Preorder: ", bst.DFSPreorder());
console.log("Result of DFS Postorder: ", bst.DFSPostorder());

//         9
//    4          20
// 1     6   15      170

/*
DFS InOrder: 1, 4, 6, 9, 15, 20, 170
DFS PreOrder: 9, 4, 1, 6, 20, 15, 170
DFS PostOrder: 1, 6, 4, 15, 170, 20, 9
*/
