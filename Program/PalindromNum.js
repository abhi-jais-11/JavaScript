function plindromNum(num) {
    return num.toString().split('').reverse().join('')
}
let num = 55;
if (num === parseInt(plindromNum(num))) {
    console.log(`${num} is Palindrom.`)
} else {
    console.log(`${num} is not Palindrom.`)
}