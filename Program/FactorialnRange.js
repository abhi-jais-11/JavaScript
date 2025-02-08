function factorialofNumber(num){
    let res=1;
    for(let i=1; i<=num; i++){
        res*=i;
    }
    return res;
}
let range=10;
for(let num=1; num<=range; num++){
    console.log(`Factorial of ${num} is ${factorialofNumber(num)}.`);
}
