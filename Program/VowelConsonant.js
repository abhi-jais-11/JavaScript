function vowelConsonant(char){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newChar=char.toLowerCase();
    if(newChar.match(/[^a-z]/) ){
        return 'Invalid input. Only alphabetic characters are allowed.';
    }
    if(vowels.includes(newChar)){
        return 'Vowel';
        
    }else{
        return 'Consonant';
    }

}
let char="B";
if(char.length!=1){
    console.log("Only one character is allowed!");
}else{
    console.log(`${char} is ${vowelConsonant(char)}`);
}

