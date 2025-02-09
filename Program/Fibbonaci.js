/*
The sum of  previous two term  is the next term.
ex:   
    --> fibbonaci of the 3 is -> 0 1 1 
    fn=fn-1+fn-2
*/
// // recursion
function fibbonaciSeriese(n){
    if (n<=1){
        return n;
    }
    else{
        return fibbonaciSeriese(n-1)+fibbonaciSeriese(n-2);
    }
}

let n=10;
console.log(fibbonaciSeriese(n));


// iteration

let range=10;
let first=0;
let second=1;
let third=0
for(let i=1; i<=range; i++){
    console.log(second);
    third=first+second;
    first=second;
    second=third;
}