// donnes user IP : 
const ville = document.querySelector("span#ville"); 
const pays = document.querySelector("span#pays");
const oper = document.querySelector("span#oper"); 

// donnees modal: 
const btnModal = document.querySelector("a[href='#modalStag']"); 
const modal = document.querySelector("div#modalStag"); 
const modalC = document.querySelector("div#modalStag>p.close"); 

let modalOpen = false; 

let modalClose = () =>{
    modal.style.visibility="hidden";
    modal.style.opacity="0"; 
    document.body.classList.remove("hide");
    modalOpen=false;   
    // ici il faut changer la carte aussi (le active); 
}

btnModal.addEventListener("click", () => { 
    modalOpen=true; 
    document.body.classList.add("hide");
    modal.style.visibility="visible"; 
    modal.style.opacity="1";
    modalC.addEventListener("click", () => {
        modalClose();
    });  
}); 


document.body.addEventListener("click", (e) => {
    if(modalOpen){
        if(e.target == e.currentTarget){
            modalClose();   
        }          
    }

});



// csript user IP Api 
const getIP = async() => {
    await fetch('http://ip-api.com/json/') // ${..ip..}; 
    .then(response => response.json())
    .then(response => {
        ville.innerHTML = response.city; 
        pays.innerHTML = response.country; 
        oper.innerHTML = response.isp; 
    })
}

getIP();