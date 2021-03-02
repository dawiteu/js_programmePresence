import "./class/user.js"; 
import { User } from "./class/user.js";

const abref = document.querySelector("a#abtnrefresh"); 
// donnes user IP : 
const ville = document.querySelector("span#ville"); 
const pays = document.querySelector("span#pays");
const oper = document.querySelector("span#oper"); 
const spip = document.querySelector("span#ip");

//register: 
const btnReg = document.querySelector("button[name=registerbtn]");

//button storage remise a 0: 
const btnst0 = document.querySelector("button#btnst0"); 

btnst0.addEventListener("click", () =>{
    localStorage.clear();
});



// donnees modal: 
const btnModal = document.querySelector("a[href='#modalStag']"); 
const modal = document.querySelector("div#modalStag"); 
const modalC = document.querySelector("div#modalStag>p.close"); 

let modalOpen = false; 

let modalClose = () =>{
    modal.style.visibility="hidden";
    modal.style.opacity="0"; 
    let divH = document.querySelector("div.hide");
    divH ? document.body.removeChild(divH) : null ; 
    modalOpen=false;
}

btnModal.addEventListener("click", () => { 
    modalOpen=true;
    modal.style.visibility="visible";
    modal.style.opacity="1";
    let divHide = document.createElement("div"); 
    divHide.classList.add("hide"); 
    document.body.insertBefore(divHide, document.querySelector("header"));
    let bodyHei = document.body.offsetHeight; 
    divHide.style.height = bodyHei; 
    getIP();
    modalC.addEventListener("click", () => {
        modalClose();
    });  

    divHide.addEventListener("click", (e) => {
        if(modalOpen){
            if(e.target == e.currentTarget){
                modalClose();   
            }          
        }
    });

}); 

// button enregistrer dans le modal
btnReg.addEventListener("click", () =>{
    let regPrenom = document.querySelector("input[name=registerprenom]").value; 
    let regNom = document.querySelector("input[name=registernom]").value; 
    let regClasse= document.querySelector("input[name=registerclasse]").value; 
    let regAge= document.querySelector("input[name=registerage]").value;


    if(regPrenom.length > 0 && regNom.length > 0 && regClasse.length > 0 && regAge > 0){
        let user = new User(regNom, regPrenom, regClasse, regAge); 
        
        let usID = window.localStorage.length;
        window.localStorage.setItem('user'+usID, JSON.stringify(user)); 

        let checkThisUsInLS = window.localStorage.getItem('user'+usID);

        console.log(JSON.parse(checkThisUsInLS));
        modalClose(); 
        window.reload();
    }else{
        alert('les champs doivent etre remplis!'); 
    }
});
//fin register;'

// fin modal ; 

// cartes (simulation); 
const cartesLink = document.querySelectorAll("a.nav-link");
const carttextes = document.querySelectorAll("div.textlink"); 


cartesLink.forEach(card => {
    card.addEventListener("click", () => {
        let link = card.getAttribute('href').substring(1); 
        let divlink = card.getAttribute('href');

        if(link != "modalStag"){ // si c'est le modal on fait rien
            cartesLink.forEach(e =>{ e.parentElement.classList.remove("active")});
            card.parentElement.classList.add("active");   
            carttextes.forEach((e) => e.style.display="none"); 
            document.querySelector(divlink).style.display="block";  
        }
        if(link == "presences"){
            document.querySelector(divlink).innerHTML="";
            let nbetud = localStorage.length; 
            let text=""; 
            text+="Liste de personnes enregistrées: "+nbetud;
            text+="<table class='w-100 tbluserlist'><tr><th>nom</th><th>prénom</th><th>classe</th><th>age</th></tr>";
            
            for(let i=0; i < nbetud; i++){
                const pers = localStorage.getItem('user'+i);
                const data = JSON.parse(pers); 
                text+="<tr><td>"+data.nom+"</td><td>"+data.prenom+"</td><td>"+data.classe+"</td><td>"+data.age+"</td></tr>";
            }

            text+="</table>";

            document.querySelector(divlink).innerHTML=text;
        }
        if(link == "storage0"){
            
        }
    });
});

//fin cartes



// refresh: 
abref.addEventListener("click", () =>{
    let con = confirm("Voulez-vous refresh?");
    con ? location.reload() : null; 
});

// csript user IP Api 
const getIP = async() => {
    await fetch('http://ip-api.com/json/') // ${..ip..}; 
    .then(response => response.json())
    .then(response => {
        ville.innerHTML = response.city; 
        pays.innerHTML = response.country; 
        oper.innerHTML = response.isp; 
        spip.innerHTML = response.query; 
    })
}

//getIP();