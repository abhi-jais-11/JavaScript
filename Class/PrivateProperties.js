/*
What is private properties in class:
  - Private properties are only accessible within the class and its methods.
  - Private properties get created by using a hash # prefix.
  - And cannot be legally referenced outside of the class. 
  - The privacy encapsulation of these class properties is enforced by JavaScript itself.
  - The only way to access a private property is via dot notation. 
  - You can only do so within the class that defines the private property.
  Syntax:
  class ClassWithPrivate {
  #privateField;
  #privateFieldWithInitializer = 42;
  #privateMethod() {
    // …
  }

- There are some additional syntax restrictions:
- All private identifiers declared within a class must be unique.
- The namespace is shared between static and instance properties. 
- The only exception is when the two declarations define a getter-setter pair.
- The private identifier cannot be #constructor.

- It is a syntax error to refer to # names from outside of the class. 
- It is also a syntax error to refer to private properties that were not declared in the class body, or to attempt to remove declared properties with delete.


class ClassWithPrivateField {
  #privateField;

  constructor() {
    delete this.#privateField; // Syntax error
    this.#undeclaredField = 42; // Syntax error
  }
}

const instance = new ClassWithPrivateField();
instance.#privateField; // Syntax error


*/

class PrivateField {
    #privateVar;
    constructor(value) {
        this.#privateVar = value;
    }
    getPrivateVar() {
        return this.#privateVar;
    }
}

let obj = new PrivateField(10);
console.log(obj.getPrivateVar()); // Output: 10
// obj.#privateVar = 20; // Syntax error: Private fields are read-only.

console.log("-------------------------------------------");

class PrivateMethod {
    #privateMethod() {
        console.log("Private Method");
    }
    callPrivateMethod() {
        this.#privateMethod();
    }
}

let obj2 = new PrivateMethod();
// obj2.#privateMethod(); // Syntax error: Private methods are not accessible outside of the class.
obj2.callPrivateMethod();


// getter and setter methods

class PrivateProprty {
    #name;
    constructor(name) {
        this.#name = name;
    }
    setName(name) {
        return this.#name = name;
    }
    getName() {
        return this.#name;
    }
}

let obj3 = new PrivateProprty("John Doe");
console.log('--------------------------------');
obj3.setName("Michelle");
console.log(obj3.getName());

console.log('--------------------------------');

class User {
    #username = "username12";
    #password = "user123@";

    constructor(username,password){
        this.#userLogin(username,password);
    }
    #userLogin(uname, upass) {
        if (this.#username === uname && this.#password === upass) {
            console.log("Login Successlly!")
        } else {
            console.log("Invalid username or password:!");
        }
    }
}

// object creation
const user=new User("user","userxyz");//invalid
const user2=new User("username12","user123@");//login
// user.#username;Property '#username' is not accessible outside class 'User' because it has a private identifier