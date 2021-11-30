
class Node{
  constructor(data,next=null){
    this.data=data;
    this.next=next;
  }
}

class Linkedlist{
  constructor(){
    this.head=null;
    this.size=0;
  }

  // 1 insert at the beginning
  insertAtBeginning(data){
    this.head=new Node(data,this.head);
    this.size++;
  }
  // 2 insert at the end
  insertAtEnd(data){
    let node=new Node(data);
    //  check if list is empty
    let current=this.head;
    if(!current){
      this.head=node;
      this.size++;
    }else{
      while(current.next){
        current=current.next;
      }
      current.next=node;
      this.size++;
    }
  }

  // 3 insert at a particular position
  insertAtPosition(data,index){
    // if index out of bound
    if(index>0&&index>this.size){
      return;
    }
    // if index is 0
    if(index===0){
      this.insertAtBeginning(data);
      return;
    }

    let node=new Node(data);
    let current,previous;
    let counter=0;
    current=this.head;
    while(counter<index){
     previous=current; //the previous node before the index
     counter++;
     current=current.next; //the current node after the index
    }
    node.next=current;
    previous.next=node;
    this.size++;
  }
  // 4 get at index
  getDataAtIndex(index){
    let current=this.head;
    let counter=0;
    let temp=null;
    while(current){
      if(counter==index){
        temp=current.data;
        break;
      }
      counter++;
      current=current.next;
    }
    return temp;
  }
  // 5 Remove at index
  removeAtIndex(index){
    if(index>0&&index>this.size){
      return;
    }
    let current=this.head;
    let previous;
    let counter=0;
    if(index==0){
      this.head=current.next;
    }else{
      while(counter<index){
        previous=current;
        current=current.next;
        counter++;
      }
      previous.next=current.next;
    }
    this.size--;
  }
  // 6 Clear list
  clearList(){
    this.head=null;
    this.size=0;
  }
  // 7 print list
  printData(){
    let current=this.head;
    while(current){
      console.log(current.data);
      current=current.next;
    }
  }
  // 7 reverse list
  reverse() {
    if (!this.head) return; 
    let current = this.head;
    const linkedList = new Linkedlist(); 
    while (current) { 
        linkedList.insertAtBeginning(current.data); 
        current = current.next;
    }
    this.head = linkedList.head;
}


}
