//sélcetion des éléments
const formulaire = document.querySelector("#commentform");
const nom = document.querySelector("#nom");
const commentaire = document.querySelector("#comment-zone");
const erreur = document.querySelector("#error");
const listecommentaires = document.querySelector("#comment-list");

//evenement lors de l'envoi du formulaire
formulaire.addEventListener("submit", function (event) {

    event.preventDefault();

    erreur.textContent = "";

    
});