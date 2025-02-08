function vowelConsonant(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < newStr.length; i++) {
        if (vowels.includes(newStr[i])) {
            count++;
        }
    }
    return count;

}
let str = "Hello world!";
console.log(`${vowelConsonant(str)} vowels are in this string:`);


