const fibonacci=(target)=>{
  const sequence=[0n,1n];
  for(let i=2;i<target+1;i++){
    const next=sequence[i-1]+sequence[i-2];
    sequence.push(next);
  }
  return sequence[target];
}
const fibonacciRecursion=(target)=>{
  if(target<2){
    return target;
  }
  return fibonacciRecursion(target-1)+fibonacciRecursion(target-2);
}
const factorial=(n)=>{
  if(n<2)return 1;
  let sum=1;
  for(let i=n;i>=1;i--){
    sum*=i;
  }
  return sum;
}
const factorialRecursion=(n)=>{
  if(n<2)return 1;
  return n*factorialRecursion(n-1);
}

const pow=(base,exp)=>{
  if(exp==0)return 1;
  for(let i=1;i<exp;i++){
    base*=base;
  }
  return base;
}
const powRecursion=(base,exp)=>{
  if(exp==0)return 1;
  return base*powRecursion(base,exp-1);
}
