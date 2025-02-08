// find the legnth of the string without using the length property

function findLegnthOfString(str){
    let count=0;
    while(str[count]){
        count++;
    }
    return count;
}

let string="Hello World!";
console.log(findLegnthOfString(string)); 