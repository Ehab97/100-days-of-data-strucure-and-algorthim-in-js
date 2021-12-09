class Stack{
  constructor(){
    this.items = [];
    this.count = 0;
  }

  push(item){
    this.items[this.count] = item;
    console.log(`Pushed item ${item} in position ${this.count}`);
    this.count++;
    return this.count-1;
  }
  pop(){
    if(this.count == 0){
      console.log("Stack is empty");
      return null;
    }
    let deleteItem = this.items[this.count-1];
    this.items[this.count-1] = null;
    this.count--;
    console.log(`Popped item ${deleteItem}`);
  }
  peek(){
    return this.items[this.count-1];
  }
  isEmpty(){
    return this.count == 0;
  }
  getSize(){
    return this.count;
  }
  clearStack(){
    this.items = [];
    this.count = 0;
    console.log("Stack is cleared");
  }
  printStack(){
    let arr=[]
    let temp=new Stack();
    for(let i=0;i<this.count;i++){
      arr[i] = this.items[i];
      temp.push(this.items[i]);
      console.log(this.items[i]);
    }
    return arr || temp;
  }
}
