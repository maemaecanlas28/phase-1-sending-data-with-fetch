// Add your code here

const submitData = (name, email) => {
    const items = {
        name: name,
        email: email,
    }
    
    const configurationObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(items)
    }
    return fetch("http://localhost:3000/users", configurationObj)
    .then(res => res.json())
    .then(data => {
        const id = data.id;
        const p = document.createElement("p");
        p.textContent = id;
        document.body.appendChild(p);
    })
    .catch(error => {
        const err = error.message;
        document.body.textContent = err;
    })
}

