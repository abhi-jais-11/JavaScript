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
let num=21;
if(primNum(num)){
    console.log(`${num} is a prime number`);
}else{
    console.log(`${num} is not a prime number`);
}