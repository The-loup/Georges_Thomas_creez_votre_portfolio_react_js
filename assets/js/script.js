//sélcetion des éléments
const formulaire = document.querySelector("#comment-form");
const nom = document.querySelector("#nom");
const commentaire = document.querySelector("#comment-zone");
const erreur = document.querySelector("#error");
const listecommentaires = document.querySelector("#comment-list");

//evenement lors de l'envoi du formulaire
formulaire.addEventListener("submit", function (event) {

    event.preventDefault();

    erreur.style.display = "none";
    erreur.textContent = "";

    //validation du nom
    if (nom.value.trim().length < 2) {
        erreur.style.display = "block";
        erreur.textContent = "Le nom doit contenir au moins 2 caractères.";
        return;
    }

    //validation du commentaire
    if (commentaire.value.trim().length < 10) {
        erreur.style.display = "block";
        erreur.textContent = "Le commentaire doit contenir au moins 10 caractères.";
        return;
    }

    //création de la carte commentaire
    const carte = document.createElement("div");
    carte.classList.add("comment");

    //nom de l'auteur
    const auteur = document.createElement("h3");
    auteur.textContent = nom.value.trim();

    //texte du commentaire
    const texte = document.createElement("p");
    texte.textContent = commentaire.value.trim();

    //bouton supprimer
    const supprimer = document.createElement("button");
    supprimer.textContent = "🗑️ Supprimer";
    supprimer.classList.add("delete");

    supprimer.addEventListener("click", function () {
        carte.remove();
    });

    //ajout des éléments dans la carte 
    carte.appendChild(auteur);
    carte.appendChild(texte);
    carte.appendChild(supprimer);

    //ajout dans la liste des commentaires
    listecommentaires.appendChild(carte);

    //réinitialisation du formulaire
    formulaire.reset();
});