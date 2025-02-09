/*
Polymorphism is one of the core concepts of object-oriented programming languages where poly means many and morphism means transforming one form into another. 
Polymorphism means the same function with different signatures is called many times.
In JavaScript, polymorphism works in two primary ways:
Method Overriding: A child class overrides a method of its parent class.
Method Overloading (simulated): A function behaves differently based on the number or type of its arguments.
*/
//1.Method Overriding
//In method overriding, a subclass provides its own implementation for a method defined in the superclass.

class Animal{
    run(){
        console.log("Dog can run.");
    }
}

class Cat extends Animal{
    run(){
        console.log("Cat can run.");
    }
}
class Horse extends Animal{
    run(){
        console.log("Horse can run.");
    }
}

const animal=new Animal();
const cat=new Cat();
const horse=new Horse();
cat.run();
animal.run()
horse.run();

//Method Overloading
//JavaScript does not natively support method overloading, but you can achieve similar functionality using default parameters, conditional logic, or the arguments object.




class Calculator {
      add(a, b, c = 0) {
        return a + b + c;
      }
}

const calc = new Calculator();
console.log(calc.add(2, 3));
console.log(calc.add(2, 3, 4));