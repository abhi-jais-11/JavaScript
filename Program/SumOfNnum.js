// 1.method
function sumOf_n_Number(num){
    return (num*((num+1)/2))
}

let num=100;
console.log(`Sum of ${num} is ${sumOf_n_Number(num)}.`);

//2.method 
function sumOfnNumber(num){
    let sum=0;
    for(let i=1; i<=num; i++){
        sum+=i;
    }
    return sum;
}
let num1=100;
console.log(`Sum of ${num} is ${sumOfnNumber(num1)}.`);

