/*
What is public Properties:
- The Variables and methods declared directly on a class or outside any block are considered public in JavaScript.
- By default, everything declared in JavaScript is public. There is no concept of private/protected by default.
- Public scope can be useful for variables and functions that need to be used by multiple parts of your code. 
When to use Public Scope?
- Use public scope for variables and functions that need to be accessible from anywhere in your code. 

Syntax:
     class PublicProperties{
     //public properties
        name:
        age;
        contructor{
            //
        }
        info(){
        }
     }

*/

class PublicProperties {
    name; age; id; course;
    constructor(name, age, id, course) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.course = course;
    }
    //public
    setInfo(name, age, id, course) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.course = course;
    }
    //public
    getInfo() {
        console.log(`
 Id:${this.id}
 Name:${this.name}
 Age:${this.age}
 Course:${this.course}
    `);
    }
}


// object creation 
const object = new PublicProperties("Jack", 22, 1, "CSE");
object.getInfo();

// set info outside of the class
object.name="Jack Hunt";
object.age=24;
object.id=2;
object.course="BSC";
// get info outside of the class
console.log(object);


// setinfo inside the class
object.setInfo("Jui",23,3,"MSC");
// get info 
object.getInfo();