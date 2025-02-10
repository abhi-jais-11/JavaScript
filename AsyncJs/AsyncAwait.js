/*
Async and Await :
 - In JavaScript is used to simplify handling asynchronous operations using promises.
 - By enabling asynchronous code to appear synchronous, they enhance code readability 
 - And make it easier to manage complex asynchronous flows.
 - The async keyword transforms a regular JavaScript function into an asynchronous function, causing it to return a Promise.
 - The await keyword is used inside an async function to pause its execution and wait for a Promise to resolve before continuing.
 Syntax:
async function functionName() {
  try {
    const result = await someAsyncFunction();
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
 - Async functions always return a promise.
 - If a value is returned that is not a promise, JavaScript automatically wraps it in a resolved promise.

 Await Keyword
 - The await keyword is used to wait for a promise to resolve. 
 - It can only be used within an async block.
 - Await makes the code wait until the promise returns a result, allowing for cleaner and more manageable asynchronous code.

Advantages of Async and Await
 Improved Readability: 
    -Async and Await allow asynchronous code to be written in a synchronous style, making it easier to read and understand.
 Error Handling:
  - Using try/catch blocks with async/await simplifies error handling.
 Avoids Callback Hell:
  - Async and Await prevent nested callbacks and complex promise chains, making the code more linear and readable.
 Better Debugging:
  - Debugging async/await code is more intuitive since it behaves similarly to synchronous code.
  What does async do?
     - Marks a function to always return a Promise.
*/


const fetchData = async () => {
  return "Data from the function"

}
console.log(fetchData());
console.log("----------------------------------------");
const fetData= async()=>{
  try{
      const res=await fetch("https://jsonplaceholder.typicode.com/posts/1")
      const data=await res.json();
      console.log(data);
      return data
  }catch(e){
      console.log(e.message);
  }
}
console.log("----------------------------------------");
console.log(fetData());// return promise access promise outside we can use then and catch
console.log("----------------------------------------");
fetData().then(data=>console.log(data)).catch(e=>console.log(e))


