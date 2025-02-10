/*
OtptionalChanning:
    -The process of accessing properties nested within objects, especially when dealing with potentially null or undefined values.
    -It provides a concise syntax for accessing properties deep within nested objects without encountering errors due to null or undefined values. This helps in writing cleaner and more readable code by reducing the need for explicit null checks and conditionals.
    -When we want to check a value of the property that is deep inside a tree-like structure, we often have to check whether intermediate nodes exist.
    ex:
        let Value = user.dog && user.dog.name;
    -The Optional Chaining Operator allows a developer to handle many of those cases without repeating themselves by assigning intermediate results in temporary variables:
    let Value = user.dog?.name;
    Syntax: 
    obj?.prop
    obj?.[expr]
    arr?.[index]
    func?.(args)


    const user = {
    dog: {
        name: "Alex"
    }
};

console.log(user.cat?.name); //undefined
console.log(user.dog?.name); //Alex
console.log(user.cat.name); 
*/


const user ={
    admin:{
        name:"Admin"
    },
    client:{
        name:"Client"
    },
    getName:function(){
        return this.admin.name + this.client.name
    }
}


console.log('---------------------------------');
let admin=user.admin?.name;
console.log(admin);
let client=user.client?.name;
console.log(client);
console.log(user.getName?.());
// console.log(user.dog());TypeError: user.dog is not a function
console.log(user.dog?.());//undefined not error

console.log('-----------------------------------------');



let arr=[1,2,3,4,5,6]
console.log(arr?.[4]);//5
console.log(arr?.[-19]);// undefined
console.log(arr?.slice(0));


console.log('-----------------------------------------');

function sum(a,b){
    console.log(a+b);
}
sum?.(10,29)

