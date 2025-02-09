/*
Inheritance :'
    - Inheritance in JavaScript is the process of passing down properties and methods from a parent class to a child class. This allows the child class to reuse the parent class's features. 
    Benefits of inheritance 
    Inheritance enables code reusability.
    It helps to structure relationships between objects.
    It allows the creation of new classes based on existing ones By using extends keyword.
     
*/

class Parent{
    parentVarible="Parent Variable";
    constructor(){
        console.log("Parent Constructor Is Called!");
    }
    parentMethod(){
        console.log("Parent Method Is Called!");
    }
    #parentPrivate(){
        console.log("Parent Private !"); //only inside the class
    }
    parentPrivateCall()
    {
        this.#parentPrivate();
    }
}
/*
The super() method refers to the parent class.
By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
*/

//1.single

class Child extends Parent{
    childVarible="Parent Variable";
    constructor(){
        super();
        // without super() give an error.
        // super()// not allow more then one time;
        console.log("Child Constructor Is Called!");
    }
    childMethod(){
        console.log("Child Method Is Called!");
        console.log(this.parentVarible);
        this.parentMethod();
        // this.#parentPrivate()Property '#parentPrivate' is not accessible outside class 'Parent' because it has a private identifier
    }
}

const parent=new Parent();
console.log("----------------------------");
const child =new Child();
console.log('---------------------');
child.childMethod();
console.log('---------------------');

class Child2  extends   Child {
    constructor(){
        super();
        console.log("Child2 constructor called!");
         // this.#parentPrivate()Property '#parentPrivate' is not accessible outside class 'Parent' because it has a private identifier
    }
    
}
//2.double
const child2=new Child2();
child2.parentPrivateCall();

