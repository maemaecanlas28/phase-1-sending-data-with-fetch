// Add your code here

// create an object w/ name and email parameters.
const submitData = (name, email) => {
    const items = {
        name: name,
        email: email,
    }
    
// Object that contains configuration that the fetch needs to send data to server.
    const configurationObj = {
        
        // UPDATE; PATCH
        method: "POST", 

        // type of data to be sent to the server
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json",
        },

        // actual data: submitData variable
        body: JSON.stringify(items) 
    }

// Calling fetch fx w/ 2 parameters (url, configuration object variable)
    return fetch("http://localhost:3000/users", configurationObj)
    

    // response from a server is a string --> gets converted to an object/json
    .then(res => res.json())

    // manipulating the data to be added to the HTML
    .then(data => { 
        const id = data.id;
        const p = document.createElement("p");
        p.textContent = id;
        document.body.appendChild(p);
    })

    // catch is a fx w/ one parameter: error; append this to the DOM via elements
    .catch(error => {
        const err = error.message;
        document.body.textContent = err;
    })
}

