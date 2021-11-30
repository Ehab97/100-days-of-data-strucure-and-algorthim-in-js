const binarySearch=(arr,item)=>{
     let low=0;
     let high=arr.length-1
     let mid=(low+high)/2;
     let steps=0;
     if(item==arr[mid]) return mid
     while(low<=high){
          mid=(low+high)/2
          mid=mid-mid%1 //convert to int
          console.log(low,high,mid,steps)
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
