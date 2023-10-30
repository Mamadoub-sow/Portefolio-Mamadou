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
const texte = "ME CONTACTER";
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
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const errorMessage = document.getElementById("error-message");

    // Réglez l'opacité initiale à 0
    document.querySelector(".contact-form").style.opacity = "0";

    setTimeout(function() {
        // Augmentez l'opacité après 4 secondes
        document.querySelector(".contact-form").style.opacity = "1";
    }, 5000);

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const nom = document.getElementById("nom").value;
        const prenom = document.getElementById("prenom").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!nom || !prenom || !email || !message) {
            errorMessage.textContent = "Veuillez remplir tous les champs.";
        } else {
            // Envoyer le formulaire (vous pouvez ajouter du code pour le traitement côté serveur ici)
            errorMessage.textContent = "Message envoyé avec succès !";
            contactForm.reset();
        }
    });
});

// Fait apparaître le pied de page avec un effet de scintillement
const footerContent = document.querySelector(".footer-content");

function fadeIn() {
    footerContent.style.opacity = "1";
}

setTimeout(fadeIn, 6000); // Attendez 2 secondes avant d'afficher le pied de page