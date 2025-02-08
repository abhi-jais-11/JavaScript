function evenOddInrange(num){
    if(num%2==0){
        return "Even";
    }else{
        return "Odd";
    }
}

let range=20;
for (let i=1; i<=range; i++){
    console.log(`${i} is ${evenOddInrange(i)}`);
}