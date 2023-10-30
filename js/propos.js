// Attendre que le document soit complètement chargé
document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez l'élément du lien "Retour à l'accueil"
    const retourAccueil = document.getElementById("retour-accueil");

    // Ajoutez un gestionnaire d'événements pour l'effet de transition au survol
    retourAccueil.addEventListener("mouseover", () => {
        retourAccueil.classList.add("hover");
    });

    // Ajoutez un gestionnaire d'événements pour supprimer l'effet de transition lorsque le curseur quitte le lien
    retourAccueil.addEventListener("mouseout", () => {
        retourAccueil.classList.remove("hover");
    });
});

// Sélectionnez l'élément où vous souhaitez afficher "PROJETS"
const element = document.getElementById("Projet");

// Texte à afficher lettre par lettre
const texte = "A PROPOS DE MOI";
let index = 0;

// Fonction pour afficher la lettre suivante avec une animation de fondu
function afficherLettre() {
    if (index < texte.length) {
        const lettre = texte[index];
        const lettreSpan = document.createElement("span");
        lettreSpan.textContent = lettre;
        lettreSpan.style.opacity = 0;
        element.appendChild(lettreSpan);
        index++;

        // Animation de fondu
        setTimeout(() => {
            lettreSpan.style.opacity = 1;
            afficherLettre();
        }, 200); // Délai entre l'affichage de chaque lettre
    }
}

// Démarrer l'animation après 2 secondes (3000 millisecondes)
setTimeout(afficherLettre, 2000);

// Attendre 4 secondes
setTimeout(function() {
    const aProposMois = document.getElementById('a_proposmois');
    aProposMois.style.opacity = '1';
    aProposMois.style.left = '0';
    // Mettre en surbrillance la première lettre
    aProposMois.innerHTML = `<span class="first-letter">${aProposMois.textContent[0]}</span>${aProposMois.textContent.slice(1)}`;
}, 6000);

// Fait apparaître le pied de page avec un effet de scintillement
const footerContent = document.querySelector(".footer-content");

function fadeIn() {
    footerContent.style.opacity = "1";
}

setTimeout(fadeIn, 10000); // Attendez 2 secondes avant d'afficher le pied de page