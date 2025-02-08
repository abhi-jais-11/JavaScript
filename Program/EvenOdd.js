function evenOdd(num){
    if(num % 2 === 0){
        return "Even";
    } else {
        return "Odd";
    }
}
let num=10;
console.log(`The number ${num} is ${evenOdd(num)}`);
let num2=5;
console.log(`The number ${num2} is ${evenOdd(num2)}`);