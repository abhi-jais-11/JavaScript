/*
What is contructor function:
  - A function that is used to create objects.
  - It is called when a new object is created using the 'new' keyword.
  - It is used to initialize the object with specific properties and methods.
  Syntax:
  function ConstructorName() {
    // Constructor body
    // Properties
    this.property1 = value1;
    this.property2 = value2;
    // Methods
    this.method1 = function() {
      // Method body
    };
    this.method2 = function() {
      // Method body
    };
  }
    
  // Example usage:
  var obj1 = new ConstructorName(prameters...);
  var obj2 = new ConstructorName(prameters...);
*/

// Define a constructor function for a Student object

function Student (id,name,s_class,course,add,country="India"){
  this.id = id,
  this.name = name,
  this.s_class = s_class,
  this.course = course,
  this.address = add,
  this.country = country
  // Student Informations
  this.getStudent=function(){
    console.log(`Student ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Class: ${this.s_class}`);
    console.log(`Course: ${this.course}`);
    console.log(`Address: ${this.address}`);
    console.log(`Country: ${this.country}`);
  }


}

// Create two instances of the Student constructor function
const student1 = new Student(1, "John Doe", "10th", "Mathematics", "123 Main St, City, State, Zip");
const student2 = new Student(2, "Jane Smith", "12th", "Science", "456 Elm St, City, State, Zip");

// Access and display the properties of the students
student1.getStudent();
student2.getStudent();

// method and properties to the contructor function
