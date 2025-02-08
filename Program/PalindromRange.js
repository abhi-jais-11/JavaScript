function plindromNum(num) {
    return num.toString().split('').reverse().join('')
}
let range = 100;
for(let num=1; num<=range; num++){
    if (num === parseInt(plindromNum(num))) {
        console.log(`${num} is Palindrom.`)
    } else {
        console.log(`${num} is not Palindrom.`)
    }
}
