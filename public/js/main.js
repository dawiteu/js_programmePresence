const ville = document.querySelector("span#ville"); 
const pays = document.querySelector("span#pays");

const getIP = async() => {
    await fetch('http://ip-api.com/json/') // ${..ip..}; 
    .then(response => response.json())
    .then(response => {
        ville.innerHTML = response.city; 
        pays.innerHTML = response.country; 
    })
}

getIP();