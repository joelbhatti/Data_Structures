class JoelTree 
  {
     constructor (val) {

       this.key = val;
       this.left = null;
       this.right = null;
     }
     
  }
  
var root = null;
function printPreorder (node){
  if (node == null)
  return;
  document.write(node.key + "");
  printPreorder (node.left);
  printPreorder (node.right);
}
function printPostorder (node){
  if (node == null)
  return;
  printPostorder(node.left);
  printPostorder (node.right);
  document.write(node.key + "");
}
function printInorder (node){
if (node == null)
return;
printPostorder(node.left);
document.write(node.key + "");
printPostorder (node.right);
}
 root = new JoelTree(1);
 root.left = new JoelTree (5);
 root.right = new JoelTree (7);
 root.left.left = new JoelTree(9);
 root.right.right = new JoelTree(10);
 document.write("This is PreOrder Traverse <br/>");
printPreorder(root);
document.write("<br/> This is postOrder Traversing<br/>");
printPostorder(root);
document.write("<br/> This is inOrder Traversing<br/>");
printInorder(root);

let joe = {
  name: "Joe",
  dob: "2/22/2022"
}

console.log(joe,"joe")