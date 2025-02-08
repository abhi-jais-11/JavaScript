function factorialofNumber(num){
    let res=1;
    for(let i=1; i<=num; i++){
        res*=i;
    }
    return res;
}

let num=5;
console.log(`Factorial of ${num} is ${factorialofNumber(num)}.`);