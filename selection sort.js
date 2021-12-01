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
