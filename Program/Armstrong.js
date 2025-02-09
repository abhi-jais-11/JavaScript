/*
If the numer is equal to the sum of the digit with power of number of digit.
ex:
    153->no of digit=3 then power=3
    153->sum with power 1^3 + 5^3 + 3^3  = 153
    153==153 number is armstrong.

    12-> digit 2 the power=2
    12-sum with power -> 1^2+2^2 = 5
    12==5 number is not armstrog

*/

function  checkArmstrong(num){
    let power = num.toString().length;
    let rem=0; // reminder
    let sum=0; // sum
    while(num>0){
        rem=num%10;
        sum=sum+rem**power;
        num=Math.floor(num/10);
    }
    return sum
}

let num=153;
let arms=checkArmstrong(num);
num===arms? console.log("Armstrong Number !") : console.log("Not Armstrong");