# 100-days-of-data-strucure-and-algorthim-in-js

## 1- linked list
    here we create a class of linked list which containe all opertions like create,delete,find,revers etc ..
    ```js
    class Node{
      constructor(data,next=null){
        this.data=data;
        this.next=next;
      }
    }
```
```js
class Linkedlist{
  constructor(){
    this.head=null;
    this.size=0;
  }

  // 1 insert at the beginning
  ```js
  insertAtBeginning(data){
    this.head=new Node(data,this.head);
    this.size++;
  }
  ```
  // 2 insert at the end
  ```js
  insertAtEnd(data){
    let node=new Node(data);
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
```
  // 3 insert at a particular position
  ```js
  insertAtPosition(data,index){

    if(index>0&&index>this.size){
      return;
    }
  
    if(index===0){
      this.insertAtBeginning(data);
      return;
    }

    let node=new Node(data);
    let current,previous;
    let counter=0;
    current=this.head;
    while(counter<index){
     previous=current; 
     counter++;
     current=current.next; 
    }
    node.next=current;
    previous.next=node;
    this.size++;
  }
  ```
 
  // 4 get at index
   ```js
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
   ```
  // 5 Remove at index
   ```js
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
   ```
   
  // 6 Clear list
   ```js
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
   ```
  // 8 reverse list
   ```js
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
 ```
 ```js
}
    ```
