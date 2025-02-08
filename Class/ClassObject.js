/*
What is class:
  - A blueprint for creating objects.
  - It defines the properties and methods that all objects of a class will have.
  - Objects are created from classes using the 'new' keyword.
  - Classes are used to create reusable code and improve code organization.
  - Classes can have properties, methods, and constructors.
  - A constructor can use the super keyword to call the constructor of the super class.
  - Classes can also have inheritance, which allows one class to inherit properties and methods from another class.
  - Only one class can be inside the js file if we are creationg more tha one than it will give an error
   SyntaxError: Identifier 'classname' has already been declared.

  - Syntax:
  class ClassName {
    // Properties
    property1 = value1;
    property2 = value2;
   constructor(parameters...) {
    // Constructor body
   }
    // Methods
    method1() {
      // Method implementation
    }
    method2() {
      // Method implementation
    }
  }

}
  const MyClass = class {
  // Class body...
};
What is object:
  - An instance of a class.
  - It has its own properties and methods defined by its class.
  - Objects can not be created with same name more than once.
  Syntax:
  var obj = new ClassName(parameters...);
*/

/*
What is the contructor in class :
  - A special method that is automatically called when a new object is created from a class.
  - It is used to initialize the object with specific properties and methods.
  - Contructor methods name the constructor.
  - The constructor method doesn't have a return statement, it only initializes the object properties.
  - Syntax:
  constructor(){}
  constructor(parameters...) {
    // Constructor body
    this.property1 = value1;
    this.property2 = value2;
   }

*/

// if we are adding more than one contructor method in a single class the it will give an error
// SyntaxError: A class may only have one constructor

class Mobile{
    // not allow 
    // constructor(){} ;
    // constructor(){} ;
}

let obj= new Mobile();

// if we are not using the constructor inside the class,Default constructor will be used by the javascript.
class Phone{
    // Default constructor
}
let obj2= new Phone();
// for checking if we are using the constructor inside the class. using to link with html page.
// sun the html file and check console to check defualt constructor  by uncommenting console.log(obj2)
//console.log(obj2); 

// creating class for the creation of the student record 

class Student{
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    // method to display the student details
    getInfo(){
        console.log(`Student ID: ${this.id}, Name: ${this.name}, Age: ${this.age}`);
    }
}

let student1= new Student(1,"John Doe",18);
student1.getInfo(); // Output: Student ID: 1, Name: John Doe, Age: 18
let student2= new Student(2,"Mice",18);
student1.getInfo(); // Output: Student ID: 2, Name:



//class expression

const MyClass = class {
  constructor(){
    console.log("MyClass constructor called");
  }
  
};
let obj3 = new MyClass(); // Creating an instance of MyClass