const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail"




let ul = document.createElement("ul")
    document.body.appendChild(ul)
for (let i = 0; i < 10; i++){
    fetch(endpoint)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        const li = document.createElement("li")
        li.innerText= data.response
        ul.appendChild(li)
    })
    .catch(error => {
        console.log(error)
    })}
