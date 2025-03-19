let header = document.querySelector('header')
let score =0;
header.addEventListener("click", ()=>{
    let nom = prompt("Entrez votre nom !!😎") 
    score =1;

    if(score = 1){
        let BIENVENUE = document.querySelector('span')

        BIENVENUE.textContent = nom;
    }
})