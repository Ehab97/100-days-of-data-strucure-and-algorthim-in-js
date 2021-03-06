# 100-days-of-data-strucure-and-algorthim-in-js

## 1- linked list
###### here we create a class of linked list which containe all opertions like create,delete,find,revers etc ..
    ```js
     class Node{
          constructor(data,next=null){
            this.data=data;
            this.next=next;
          }
         }
    ```
linkedlist class
   ```js
    class Linkedlist{
      constructor(){
            this.head=null;
            this.size=0;
      }
   ```
   1 insert at the beginning
  ```js
      insertAtBeginning(data){
        this.head=new Node(data,this.head);
        this.size++;
      }
  ```
   2 insert at the end
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
 ####   3 insert at a particular position
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
 ####  4 get at index
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
####  5 Remove at index
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
   
####   6 Clear list
   ```js
  clearList(){
    this.head=null;
    this.size=0;
  }
  ```
####   7 print list
   ```js
  printData(){
    let current=this.head;
    while(current){
      console.log(current.data);
      current=current.next;
    }
  }
   ```
####   7 reverse list
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


## 2 binay search

#### here we use binay search on sorted data to find iten in the data in O(logn)

```js
    const binarySearch=(arr,item)=>{
         let low=0;
         let high=arr.length-1
         let mid=(low+high)/2;
         let steps=0;
         if(item==arr[mid]) return mid
         while(low<=high){
              mid=(low+high)/2;
              mid=mid-mid%1;
            if(item==arr[mid]) return mid
            else if(arr[mid]<item){
                 low=mid+1
            }else{
                 high=mid-1
            }  
            steps++;
         }
         return 'not Found'
    }
```  

## 3 Selection sort
 #### is the simplest sort alogrthim but also it's lowest it's take o(n^2)
 ##### normal way
 ```js
     const selectionSort=(arr)=>{
      for(let i=0;i<arr.length;i++){
        let min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
              min=j;
            }
        }
        let temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp;
      }
      return arr;
    }
 ```
##### in elquant way
 ```js
     const selectionSortEloquent=(arr)=>{
      arr.forEach((_value,index,array) => {
        const smallest=Math.min(...array.slice(index));
        const smallestIndex=array.indexOf(smallest);
        if(arr[index]>arr[smallestIndex]){
          let temp=arr[index];
          arr[index]=arr[smallestIndex];
          arr[smallestIndex]=temp;
        }
      });
      return arr;
    }
 ```

 ## 4 Recursion
   ######  is to call the function inside it self to make loop and it stop based on if it's the base case or recsive case
   ###### let's code
   ###### Here we could use recursion to solve problem like fibonacci number of factorial or create pow for math
    ```js
      const fibonacciRecursion=(target)=>{
              if(target<2){
                return target;
              }
              return fibonacciRecursion(target-1)+fibonacciRecursion(target-2);
           }
        const factorialRecursion=(n)=>{
          if(n<2)return 1;
          return n*factorialRecursion(n-1);
        }
        const powRecursion=(base,exp)=>{
          if(exp==0)return 1;
          return base*powRecursion(base,exp-1);
        }
     ```
## 5-Stack
   ###### is to save data in top of each other in that first in last out FILO or last in first out LIFO
  ```js
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
    ```
    
   
 ## 6-Quick stort
   ######     quick sort is one of the fatest algortim for sort
   ######    it's baed on Divide and Conqer teqnquieqs  it's take O(nlogn)
   ```js
   const quickSort=(array)=>{
                  if(array.length<=1) return array;
                  else{
                    let pivotIndex=Math.floor(array.length/2);
                    let pivot=array[pivotIndex];
                    let left=[];
                    let right=[];
                    for(let i=0;i<array.length;i++){
                        if(array[i]<=pivot&&i!=pivotIndex){
                          left.push(array[i])
                        }else if((array[i]>pivot)){
                          right.push(array[i])
                        }
                    }
                    return [...quickSort(left),pivot,...quickSort(right)]
                  }
              }
        ```
