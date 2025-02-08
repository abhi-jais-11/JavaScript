function primNum(num){
    let prime=true;
    let sq=Math.floor(num**(.5));
    for(let i=2; i<=sq; i++){
        if(num%i===0){
            prime=false;
            break;
        }
    }
    return prime;
}
let range=50;
for (let i=1; i<=range; i++){
    if(primNum(i)){
        console.log(`${i} is a prime number`);
    }else{
        console.log(`${i} is not a prime number`);
    }
}
