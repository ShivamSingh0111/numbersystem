let number =[
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  
let primeArray = []

for(let i=0; i<number.length; i++){
    let count =0;
    for(let j=1; j<=number[i]; j++){
     if(number[i]%j==0){
        count++;
     }
    }
    if(count==2){
        primeArray.push(number[i])
    }
}
console.log("All Prime Number list",primeArray);
let max = -Infinity;
let min = +Infinity;
for(let i=0; i<primeArray.length; i++){
    if(max<primeArray[i]){
        max = primeArray[i];
    }
    if(min>primeArray[i]){
        min = primeArray[i];
    }
}
console.log("Max elemnet in the primeArray",max);
console.log("Min elemnet in the primeArray",min);

let sum=0;
for(let i=0; i<primeArray.length; i++){
    sum += primeArray[i];
}
console.log("Sum of all Prime number",sum);