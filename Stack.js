class Stack {
    constructor(){
this.items = []
    }
push(element){
    this.items.push(element)
}
pop(){
    return this.items.pop()
}
peek(){
    return this.items[this.items.length - 1]
}
isEmpty(){
    return this.items.length === 0
}
size(){
    return this.items.length
}
print(){
    console.log(this.items.toString())
}
}
const stack = new Stack()

stack.push(50)
stack.push(25)
stack.push(13)
stack.push(5)
console.log(stack.size())
stack.print()
stack.pop()
stack.print()
console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.size())