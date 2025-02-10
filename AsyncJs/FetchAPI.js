/*
Fetch Api:
    - The Fetch API provides an interface for fetching resources (including across the network).
    - It is a more powerful and flexible replacement for XMLHttpRequest.
    - The Fetch API uses Request and Response objects (and other things involved with network requests), as well as related concepts such as CORS and the HTTP Origin header semantics.
    - For making a request and fetching a resource, use the fetch() method. 
    - It is a global method in both Window and Worker contexts.
    - The fetch() method takes one mandatory argument, the path to the resource you want to fetch.
    - It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even - if the server response is an HTTP error status. 
    - You can also optionally pass in an init options object as the second argument (see Request).
*/


// simple fetch withouth method [GET]

const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users/"
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Data Not Found !")
        } else {
            const data = await response.json();
            return data
        }
    } catch (e) {
        console.log(e);
    }
}

fetchData().then((data) => {
    data.forEach(element => {
        console.log(element.name);
        console.log(element.address?.zipcode);
        console.log(element.company?.name);
    });
})
.catch(e => console.log(e.message))
