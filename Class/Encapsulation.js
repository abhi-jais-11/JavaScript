/*
What is encapsulation :
Encapsulation in JavaScript refers to the practice of wrapping data and behavior within a single entity, known as an object and limiting external access to the object’s internal state. This helps to protect the data and behavior from external interference and misuse.
formation hiding refers to the idea of hiding the internal state of an object from external access.
Abstraction refers to the process of hiding the implementation details of an object and exposing only the relevant information to the outside world.
Modularity refers to the process of breaking down a complex system into smaller, more manageable parts, and encapsulated objects are used to achieve this.
We can use # prefix for the creation of private varibale;
*/

class Encapsulation{
    #name;
    setName(name){
        this.#name=name;
    }
    getName(){
        return this.#name;
    }
}

const obj=new Encapsulation();
obj.setName("Jack");
console.log(obj.getName());


// using getter and setter

class EncapsulationClass{

    #username;

    set User(name){
        this.#username=name;
    }
    get User(){
        return this.#username;
    }
}

const object=new EncapsulationClass();
object.name="Jackson";
console.log(object.name);




// using both private method and data

class EncapsulationMethodAndData{
    #userid;

    constructor(uid){
        this.#setId(uid);
    }
    getId(){
        return this.#userid;
    }
    #setId(uid){
        this.#userid=uid;
    }
}

const object2= new  EncapsulationMethodAndData("user123");
console.log(object2.getId());