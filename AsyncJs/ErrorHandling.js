/*
Try and Catch:
    -The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed. The code in the finally block will always be executed before control flow exits the entire construct.
    - It is use for the error handling.
    Syntax:
        -try{
        //statement
        }catch(error){
        //statement
        }finally{
            //statement
        }

        1.tryStatements:The statements to be executed.
        2.catchStatements:Statement that is executed if an exception is thrown in the try block.
*/

function divisionOfNumber(a, b) {
    try {
        if (b == 0) {
            throw new Error("The zero division error.");
        } else {
            console.log("The Division of the number is :", a / b);
        }
    } catch (e) {
        console.log(e.name);
        console.log(e.message);
    } finally {
        console.log("Finally Block!");
    }
}

// divisionOfNumber(5,0)
// divisionOfNumber(10, 2);


const fetData= async()=>{
    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const data=await res.json();
        console.log(data);
    }catch(e){
        console.log(e.message);
    }
}

fetData();





