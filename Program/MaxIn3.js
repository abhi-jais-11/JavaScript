function MaxInThreeNum(a,b,c){
    if(a>b && a>c){
        return a;
    }if(b>a && b>c){
        return b;
    }else{
        return c;
    }

}
let num1=20;
let num2=86;
let num3=65;
console.log(`${MaxInThreeNum(num1,num2,num3)} is maximum in  ${num1}, ${num2}, and ${num3}.`);