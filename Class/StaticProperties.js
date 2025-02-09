/*
what is static properties:
The static keyword defines a static method or field for a class. 
Static properties cannot be directly accessed on instances[object] of the class. 
Instead, they're accessed on the class itself.
Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

Syntax:
class ClassWithStatic {
  static staticField;
  static staticFieldWithInitializer = value;
  static staticMethod() {
    // …
  }
}
There are some additional syntax restrictions:
The name of a static property (field or method) cannot be prototype.
The name of a class field (static or instance) cannot be constructor.
*/

class StaticClass {
    static PI = 3.14;
    constructor() {
        // console.log(this.PI);// undefined
        console.log(StaticClass.PI);//3.14
    }

}

const object = new StaticClass();
console.log(object.PI);// undefined
console.log(StaticClass.PI);//3.14

class Sqaure {
    static squareOfNumber(n) {
        console.log(n ** 2);
    }
    getSquare(n){
        // this.squareOfNumber(n);TypeError: this.squareOfNumber is not a function
        Sqaure.squareOfNumber(n);
    }
    static getSquareNum(n){
        this.squareOfNumber(n);// this allow if inside the static class
        Sqaure.squareOfNumber(n);//also this

    }
}
let obj = new Sqaure();//25
// console.log(obj.squareOfNumber(6));TypeError: obj.squareOfNumber is not a function
// console.log(Square.squareOfNumber(5));
// ReferenceError: Square is not defined
Sqaure.squareOfNumber(5);//25
obj.getSquare(5);//25
obj.getSquare(10);//25
console.log("-------------------------------");
// Calling static members from another static method
Sqaure.getSquareNum(7);//49 49


/*
Calling static members from a class constructor and other methods
Static members are not directly accessible using the this keyword from non-static methods. You need to call them using the class name: CLASSNAME.STATIC_METHOD_NAME() / CLASSNAME.STATIC_PROPERTY_NAME or by calling the method as a property of the constructor: this.constructor.STATIC_METHOD_NAME() / this.constructor.STATIC_PROPERTY_NAME

js

*/

class StaticClassProperties{
    constructor(){
        this.constructor.StaticMethod();//allow
        StaticClassProperties.StaticMethod();//allow
        // this.StaticMethod()//not allow
    }
    static StaticMethod(){
        console.log('static method called!');
    }
    static StaticAnother(){
        this.StaticMethod()//allow
        StaticClassProperties.StaticMethod();//allow
    }
    getStatic(){
        // this.StaticMethod()//TypeError: obj.getStatic is not a function
        StaticClassProperties.StaticMethod();//allow
    }
}
console.log('--------------------------------------');
let objn=new StaticClassProperties();
StaticClassProperties.StaticMethod()
objn.getStatic()