/*
What is Factory Fuction in JavaScript:
1. A factory function is a function that returns a new object each time it's called.
2. It is a way to create objects in JavaScript without using the 'new' keyword.
3. Factory functions are useful when creating multiple similar objects, but with different properties.

Advantages of Factory Functions:
1. They are self-contained, meaning they don't rely on any external variables or functions.
2. They are easy to test and maintain, as they only contain the code related to creating objects.
3. They can be used to create objects with different properties, making them more flexible and reusable.

Example:
// not usefull for the multiple objects
1. function mobile(){
    return {
    model: "iPhone 12",
    color: "Space Gray",
    ram: 4,
    storage: 64,
    processor: "A13 Bionic",
    }
}
let iPhone12 = mobile();
let iPhone13 = mobile();

// usefull implementation

2.function createPerson(name, age) {
  return {
  name: name,
  age: age,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
let person = createPerson("John", 29);
person.greet(); // Output: Hello, my name is John and I am 29 years old.
*/

// Factory Function Example

const mobile = (model, color, ram, storage, processor, price) => {
    return {
        model: model,
        color: color,
        ram: ram,
        storage: storage,
        processor: processor,
        price: price,
        // this method returns the details of the product
        mobileInfo: function() {
            console.log(`Model: ${this.model}, Color: ${this.color}, RAM: ${this.ram}GB, Storage: ${this.storage}GB, Processor: ${this.processor}, Price: $${this.price}`);
        }
    }
}


// Creating two instances of the mobile object using the factory function

let iPhone12 = mobile('iPhone 12', 'Space Gray', 4, 64, 'A13 Bionic', 1099);


// adding extraproperties to iPhone12
iPhone12.screenSize = '6.7 inches';
iPhone12.weight = '1.75 kg';
iPhone12.display = 'Super Amoled'
console.log(iPhone12);


console.log("----------------------------------------------------------------");
// delete the display property

delete iPhone12.display;
console.log(iPhone12); // Output: Model: iPhone 12, Color: Space Gray, RAM: 4GB, Storage: 64GB, Processor: A13 Bionic, Price: $1099, Weight: 1.75 kg, Screen Size: 6.7 inches


console.log("----------------------------------------------------------------");
let Samsung= mobile('Samsung Galaxy S21', 'Gold', 8, 128, 'Exynos 2100', 1299);
Samsung.mobileInfo(); // Output: Model: Samsung Galaxy S21, Color: Gold, RAM: 8GB, Storage: 128GB, Processor: Exynos 2100, Price: $1299


// update the device 
Samsung.model='Samsung Galaxy S25';
Samsung.mobileInfo(); // Output: Model: Samsung Galaxy S25, Color: Gold, RAM: 8GB, Storage: 128GB, Processor: Exynos 2100, Price: $1299
console.log("----------------------------------------------------------------");