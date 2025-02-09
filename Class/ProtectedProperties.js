/*
What is Protected Properties:
"protected" in JavaScript is a reserved keyword that signifies a potential future feature for defining access levels within classes, similar to "private" and "public", but currently, JavaScript does not natively support a "protected" access modifier, meaning you cannot directly use it to restrict access to members within a class; it's considered a strict mode keyword only used to signal potential future functionality. 
No direct implementation:
While "protected" is a reserved keyword, it doesn't have any functional behavior in current JavaScript. 
Convention-based approach:
Developers often use a naming convention like prefixing a property with an underscore ("_") to simulate protected behavior, where only the class itself and its subclasses should access such properties. 

class ProtectedProperties{

    // protected 
    _variable1;
    _variable2;
    ..

    _protectedMthod(){
    }
    ..
}

*/


