const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail"

for (let i = 0; i < 10; i++){
    fetch(endpoint)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        const output = document.createElement("p")
        output.innerText= data.response
        document.body.appendChild(output)
    })
    .catch(error => {
        console.log(error)
    })}
